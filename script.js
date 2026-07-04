gsap.registerPlugin(DrawSVGPlugin)

const svgPath = document.querySelector('.svg path')

gsap.set(svgPath, {
	drawSVG: '0%',
	strokeWidth: 2
})

barba.init({
	preventRunning: true,
	transitions: [
		{
			name: 'page-transition',
			leave() {
				return gsap.to(svgPath, {
					drawSVG: '100%',
					strokeWidth: 190,
					duration: 1
				})
			},
			enter() {
				window.scrollTo(0, 0)

				return gsap.timeline()
					.to(svgPath, {
						drawSVG: '100% 100%',
						strokeWidth: 2,
						duration: 1
					})
					.set(svgPath, {
						drawSVG: '0%'
					})
			}
		}
	]
})
