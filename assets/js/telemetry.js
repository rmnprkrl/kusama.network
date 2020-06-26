const { ApiPromise } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');
const { formatBalance } = require('@polkadot/util');

parityApi = ApiPromise.create({provider: new WsProvider('wss://kusama-rpc.polkadot.io/')});

parityApi.then(api => {
  Promise.all([
    api.query.balances.totalIssuance().then(totalIssuance => {
      const value = totalIssuance
        ? totalIssuance.toString()
        : null;

      const output = value
        ? `${formatBalance(value, false)}${formatBalance.calcSi(value).value.replace('E', 'M')}`
        : '-';

      return output;
    }),
    api.derive.staking.overview(),
    api.derive.staking.controllers().then(x => x[0].map((x) => x.toString())),
    api.query.session.validators().then(x => x.map((authorityId) =>
      authorityId.toString()
    ))
  ]).then(([issuance, {validators}, allStashes]) => {
    const next = allStashes.filter((address) => !validators.includes(address))

    document.querySelector('html').classList.add('telemetry-loaded');
    document.getElementById('total-issuance').innerText = issuance;
    document.getElementById('validators-waiting').innerText = next.length;

    api.disconnect();
  }).catch(e => console.error(e))
})

// npx browserify index.js > telemetry-browser.js && npx uglify-es --mangle --compress -- telemetry-browser.js > telemetry.min.js
