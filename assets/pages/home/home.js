import Typed from 'typed.js'
import { gsap } from 'gsap'

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

const handleScroll = () => {
	let scrollTop = window.scrollY

	window.requestAnimationFrame(() => {
		heroScene(scrollTop)
	})
}

// ------------ SCENES
const heroScene = scrollPos => {
	const el = document.getElementById('hero-scene')

	if (scrollPos < 100) {
		el.classList.remove('animate')
	} else {
		el.classList.add('animate')
	}
}

function init() {
	new Typed('.typed-text-hero', heroOpts)
	new Typed('.typed-text-project', projectOpts)

	window.addEventListener('scroll', handleScroll)
}

window.addEventListener('load', init)
