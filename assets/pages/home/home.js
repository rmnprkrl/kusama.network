import Typed from 'typed.js'

window.addEventListener('load', init)

const typedOpts = {
	strings: [
		'Expect chaos.',
		'No promises.',
		'Polkadot&#39;s wild cousin.',
		'A canary network.',
		'A Polkadot experiment.'
	],
	typeSpeed: 100
}

function init() {
	document.querySelector('body').classList.add('loaded')

	new Typed('.typed-text', typedOpts)
}
