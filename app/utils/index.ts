import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ! Animation */
/* -------------------------------------------------------------------------------- */
// gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

export function textReveal(elementRef: any, delay: number) {
	gsap.to(elementRef.current, {
		clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
		y: 0,
		duration: 0.5,
		delay: delay,
		ease: "power2.out",
	});
}

export function fadeIn(elementRef: any, delay: number) {
	gsap.to(elementRef.current, {
		opacity: 1,
		y: 0,
		duration: 0.5,
		delay: delay,
		ease: "power2.out",
	});
}

export function fadeUp() {
	ScrollTrigger.batch(".fade-up", {
		start: "top 80%",
		//markers: true,
		onEnter: (elements) => {
			gsap.to(elements, {
				opacity: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.2,
				ease: "power2.out",
			});
		},
	});
}

/* ! Slide orizzontale allo scroll | Homepage */
/* -------------------------------------------------------------------------------- */
export function slideToScroll(elementClass: string | undefined, scrollX: number | undefined) {
	gsap.to(`.${elementClass} > div > figure`, {
		x: scrollX,
		scrollTrigger: {
			trigger: `.${elementClass} > div`,
			start: "top bottom",
			end: "bottom 75%",
			// markers: true,
			scrub: 0.5,
		},
	});
}

/* ! Slide orizzontale allo scroll | Artist Page */
/* -------------------------------------------------------------------------------- */
export const slideToScrollPage = () => {
	let mm = gsap.matchMedia();

	// Mobile
	mm.add("(max-width: 767px)", () => {
		gsap.to(".biography .text > div", {
			x: 500,
			scrollTrigger: {
				trigger: ".biography",
				start: "top 70%",
				end: "top 10%",
				// markers: true,
				scrub: 0.5,
			},
		});
		gsap.to(".biography .media > figure", {
			x: -500,
			scrollTrigger: {
				trigger: ".biography",
				start: "top 70%",
				end: "bottom bottom",
				// markers: true,
				scrub: 0.5,
			},
		});
	});

	// Desktop
	mm.add("(min-width: 768px)", () => {
		gsap.to(".biography .text > div", {
			x: 1500,
			scrollTrigger: {
				trigger: ".biography",
				start: "top bottom",
				end: "bottom 70%",
				// markers: true,
				scrub: 0.5,
			},
		});
		gsap.to(".biography .media > figure", {
			x: -1500,
			scrollTrigger: {
				trigger: ".biography",
				start: "top bottom",
				end: "bottom 70%",
				// markers: true,
				scrub: 0.5,
			},
		});
	});
};
