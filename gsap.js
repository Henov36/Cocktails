const IsSmallMobile = window.innerWidth < 400;
const IsMobile = window.innerWidth < 769 && !IsSmallMobile;
const IsLaptope = window.innerWidth < 1441 && !IsMobile && !IsSmallMobile;

document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

	const mainSplit = new SplitText(".title", { type: "chars" });
	const parSplit = new SplitText(".par-title", { type: "lines" });

	mainSplit.chars.forEach((char) => char.classList.add("gradient-text"));

	gsap.from(mainSplit.chars, {
		scrollTrigger: {
			trigger: ".title",
			start: "top 80%",
		},
		opacity: 0,
		y: 220,
		stagger: 0.15,
		duration: 1.2,
		ease: "back.out(1.7)",
	});
	gsap.from(parSplit.lines, {
		scrollTrigger: {
			trigger: ".title",
			start: "top 80%",
		},
		opacity: 0,
		y: 50,
		stagger: 0.05,
		duration: 1,
		delay: 1,
		ease: "back.out(1.7)",
	});

	if (!IsMobile) {
		gsap.to(
			".left-leaf",
			{ x: IsSmallMobile ? -130 : -170, y: IsSmallMobile ? -120 : -300 },
			0.3
		);
		gsap.to(
			".right-leaf",
			{ x: IsSmallMobile ? 120 : 170, y: IsSmallMobile ? 50 : -150 },
			0.3
		);

		gsap
			.timeline({
				scrollTrigger: {
					trigger: "#home",
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			})
			.to(
				".left-leaf",
				{ y: 150, rotation: 130, x: IsSmallMobile ? -130 : -300 },
				0
			)
			.to(
				".right-leaf",
				{
					y: IsSmallMobile ? -100 : -300,
					rotation: -140,
					x: IsSmallMobile ? 100 : 300,
				},
				0
			);
	} else {
		gsap.to(".left-leaf", { x: -120, y: -120 }, 0.3);
		gsap.to(".right-leaf", { x: 120, y: -50 }, 0.3);

		gsap
			.timeline({
				scrollTrigger: {
					trigger: "#home",
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			})
			.to(".left-leaf", { y: 150, rotation: 130, x: -300 }, 0)
			.to(".right-leaf", { y: -300, rotation: -140, x: 300 }, 0);
	}

	const startValue = IsMobile ? "top top" : "top top";
	const endValue = IsMobile ? "120% center" : "bottom 10%";

	const video = document.getElementById("video");

	video.onloadedmetadata = () => {
		const duration = video.duration || 10;
		video.currentTime = 0.01;
		if (IsMobile) {
			video.play().then(() => {
				video.pause();
				video.currentTime = 0;
			});
		}

		const tl = gsap
			.timeline({
				scrollTrigger: {
					trigger: "video",
					start: startValue,
					end: endValue,
					scrub: 0.7,
					pin: true,
				},
			})
			.fromTo(
				video,
				{
					currentTime: 0,
					scale: IsSmallMobile ? 1.5 : IsMobile ? 2 : IsLaptope ? 1 : 1.8,
					opacity: IsMobile ? 1 : 0.5,
				},
				{
					currentTime: 10,
					scale: IsSmallMobile ? 1.1 : IsMobile ? 1.8 : IsLaptope ? 1 : 1,
					opacity: IsMobile ? 0.5 : 1,
					ease: "none",
				}
			);
		tl.to(video, {
			currentTime: duration,
			ease: "none",
		});
	};
	gsap
		.timeline({
			scrollTrigger: {
				trigger: "#cocktails",
				start: "top 30%",
				end: "bottom 80%",
				scrub: true,
			},
		})
		.to(
			".cocktail__leaf-left",
			{
				y: IsSmallMobile ? -50 : 0,
				x: IsSmallMobile ? -120 : -100,
				rotation: 27,
			},
			0
		)
		.to(
			".cocktail__right-left",
			{
				y: IsSmallMobile ? 50 : 50,
				x: IsSmallMobile ? 100 : 100,
			},
			0
		);

	const aboutUsTitle = new SplitText("#aboutUs h2", {
		type: "words",
	});

	gsap
		.timeline({
			scrollTrigger: {
				trigger: "#aboutUs",
				start: "top center",
			},
		})
		.from(".aboutUs__right-side", {
			opacity: 0,
			duration: 1,
			yPercent: 200,
			ease: "expo.out",
		})
		.from(".grid-container", {
			opacity: 0,
			yPercent: 200,
			ease: "expo.out",
		})
		.from(".grid-item h4", {
			opacity: 1,
			duration: 0.5,
			ease: "expo.out",
			xPercent: 150,
		})
		.fromTo(
			".grid-item h4 span",
			{
				opacity: 0,
				rotation: 0,
				ease: "bounce.out",
			},
			{
				opacity: 1,
				rotation: 12,
				delay: 0.3,
				duration: 1,
			}
		);

	const ScrollTimeline = gsap
		.timeline({
			scrollTrigger: {
				trigger: "#aboutUs",
				start: "top center",
			},
		})
		.from(".best_cocktails", {
			opacity: 0,
		})
		.from(aboutUsTitle.words, {
			opacity: 0,
			duration: 1,
			yPercent: 200,
			ease: "expo.out",
			stagger: 0.03,
		})
		.from(".detail-span", {
			opacity: 0,
			duration: 1,
			yPercent: -200,
			xPercent: 200,
			rotation: 429,
			ease: "expo.out",
		});

	const maskTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: "#art",
			start: IsMobile ? "top 20%" : "top top",
			end: "bottom center",
			scrub: 1.5,
			pinSpacing: false,
		},
	});

	maskTimeline
		.to(".will-fade", {
			opacity: 0,
			stagger: 0.2,
			ease: "power1.inOut",
		})
		.to(".masked-img", {
			scale: 1.3,
			maskPosition: "center",
			maskSize: "400%",
			duration: 1,
			ease: "power1.inOut",
		})
		.to("#masked-content", {
			opacity: 1,
			duration: 1,
			stagger: 0.2,
		});
	const timelineSlide = gsap.timeline({
		scrollTrigger: {
			trigger: "#art",
			pin: true,
			start: "top top",
			end: "+=100%",
			scrub: 1,
			invalidateOnRefresh: true,
		},
		defaults: { ease: "none" },
	});
	timelineSlide.to("#slider", { yPercent: -100 });

	gsap.fromTo(
		".contacts-content",
		{
			opacity: 0.1,
			yPercent: -150,
			scale: 0.01,
			rotateX: 70,
			filter: "brightness(0) blur(10px)",
		},
		{
			opacity: 1,
			yPercent: 0,
			scale: 1,
			filter: "brightness(1) blur(0px)",
			rotateX: 0,
			scrollTrigger: {
				trigger: "#footer",
				start: "top 10%",
				end: "bottom bottom",
				scrub: 5,
			},
		}
	);
	gsap
		.timeline({
			scrollTrigger: {
				trigger: "#slider",
				start: "-50% bottom",
				end: "bottom top",
				scrub: true,
			},
		})
		.to(
			".slider__left-leaf",
			{
				y: IsSmallMobile ? -300 : -950,
				rotation: 140,
				x: IsSmallMobile ? -350 : IsMobile ? -450 : -800,
			},
			0
		)
		.to(
			".slider__right-leaf",
			{ y: IsSmallMobile ? -200 : -400, x: IsSmallMobile ? 200 : 400 },
			0
		);

	gsap
		.timeline({
			scrollTrigger: {
				trigger: "#footer",
				start: "top 90%",
				end: "bottom bottom",
				scrub: true,
			},
		})
		.to(
			".contact__left-leaf",
			{ y: 200, rotation: 50, x: IsSmallMobile ? -130 : -200 },
			0
		)
		.to(".contact__right-leaf", { y: -100, x: 120 }, 0);
});

export function animatedSlide(index, direction) {
	const imageFrom = direction === "right" ? 100 : -100;

	gsap.fromTo(
		".animated-image",
		{ opacity: 0, xPercent: imageFrom },
		{
			opacity: 1,
			xPercent: 0,
			duration: 1,
			ease: "power1.inOut",
		}
	);
	gsap.fromTo(
		".right-text",
		{ opacity: 0, xPercent: 100 },
		{
			opacity: 1,
			xPercent: 0,
			duration: 1,
			ease: "power1.inOut",
		}
	);
	gsap.fromTo(
		".left-text",
		{ opacity: 0, xPercent: -100 },
		{
			opacity: 1,
			xPercent: 0,
			duration: 1,
			ease: "power1.inOut",
		}
	);

	gsap.fromTo(
		".slide__content",
		{ opacity: 0, yPercent: 50 },
		{
			opacity: 1,
			yPercent: 0,
			duration: 1,
			ease: "power1.inOut",
		}
	);

	gsap.fromTo(
		".cocktail-arrow-right",
		{ opacity: 0, xPercent: 50 },
		{
			opacity: 1,
			xPercent: 0,
			duration: 1,
			ease: "power1.inOut",
		}
	);
	gsap.fromTo(
		".cocktail-arrow-left",
		{ opacity: 0, xPercent: -50 },
		{
			opacity: 1,
			xPercent: 0,
			duration: 1,
			ease: "power1.inOut",
		}
	);
}
