import Typed from 'typed.js'

window.addEventListener('load', init)

const heroOpts = {
	strings: [
		'Expect chaos.',
		'No promises.',
		'Polkadot&#39;s wild cousin.',
		'A canary network.',
		'A Polkadot experiment.'
	],
	typeSpeed: 100,
	loop: true
}

const projectOpts = {
	strings: [ 'Innovation', 'Scalability', 'Interoperability', 'Customization' ],
	typeSpeed: 100,
	loop: true
}

function init() {
	new Typed('.typed-text-hero', heroOpts)
	new Typed('.typed-text-project', projectOpts)
}
