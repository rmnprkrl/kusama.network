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

export const mapRange = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2

const handleScroll = () => {
	let scrollTop = window.scrollY

	window.requestAnimationFrame(() => {
		heroScene(scrollTop)
		boxScene()
		kusamaScene()
		launchScene()
		parallax()
	})
}

// ------------ SCENES
const heroScene = scrollPos => {
	const el = document.getElementById('hero-scene')

	if (scrollPos < 150) {
		el.classList.remove('animate')
	} else {
		el.classList.add('animate')
	}
}

const boxScene = () => {
	const el = document.getElementById('box-scene')
	const move = el.querySelector('.move')
	let windowHeight = window.innerHeight
	let top = el.getBoundingClientRect().top - windowHeight
	let bottom = el.getBoundingClientRect().bottom
	let height = el.getBoundingClientRect().height
	let duration = height + windowHeight

	if (top <= 0 && bottom >= 0) {
		let progress = top * -1
		progress = progress / duration

		progress = progress * 100

		let output = mapRange(progress, 0, 100, -50, 50)

		move.style.transform = `translateY(${output}%)`
	}
}

const kusamaScene = () => {
	const el = document.getElementById('kusama-scene')

	let windowHeight = window.innerHeight
	let top = el.getBoundingClientRect().top - windowHeight
	let bottom = el.getBoundingClientRect().bottom
	let height = el.getBoundingClientRect().height
	let duration = height + windowHeight

	if (top <= 0 && bottom >= 0) {
		let progress = top * -1
		progress = progress / duration

		progress = progress * 100

		let output = mapRange(progress, 0, 100, 0, 5)

		el.style.setProperty('--progress', output + '%')
	}
}

const launchScene = () => {
	const el = document.getElementById('launch-scene')
	const move = el.querySelector('.move')
	let windowHeight = window.innerHeight
	let top = el.getBoundingClientRect().top - windowHeight
	let bottom = el.getBoundingClientRect().bottom
	let height = el.getBoundingClientRect().height
	let duration = height + windowHeight

	if (top <= 0 && bottom >= 0) {
		let progress = top * -1
		progress = progress / duration

		progress = progress * 100

		let output = mapRange(progress, 0, 100, -10, 30)

		move.style.transform = `translateY(${output}%)`
	}
}

let parallaxEls

function init() {
	new Typed('.typed-text-hero', heroOpts)
	new Typed('.typed-text-project', projectOpts)

	parallaxEls = document.querySelectorAll('.parallax')

	window.addEventListener('scroll', handleScroll)
}

const parallax = () => {
	let windowHeight = window.innerHeight
	parallaxEls.forEach(el => {
		let top = el.getBoundingClientRect().top - windowHeight
		let bottom = el.getBoundingClientRect().bottom
		let height = el.getBoundingClientRect().height
		let duration = height + windowHeight

		if (top <= 0 && bottom >= 0) {
			let progress = top * -1
			progress = progress / duration

			progress = progress * 100

			// let output = mapRange(progress, 0, 100, -10, 30)

			el.style.setProperty('--progress', Math.floor(progress) + '%')
		}
	})
}

window.addEventListener('load', init)
