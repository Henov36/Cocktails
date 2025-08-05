const IsMobile = window.innerWidth < 769 ? true : false;
const IsSmallMobile = window.innerHeight < 400 ? true : false;
const IsLaptope = window.innerWidth <= 1441 ? true : false;

document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(
		MotionPathHelper,
		MotionPathPlugin,
		ScrollTrigger,
		ScrollSmoother,
		SplitText
	);

	// gsap.defaults({ ease: "none", duration: 2 	});

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
		gsap.to(".left-leaf", { x: -170, y: -300 }, 0.3);
		gsap.to(".right-leaf", { x: 170, y: -150 }, 0.3);

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

	const startValue = IsMobile ? "top top" : "center 50%";
	const endValue = IsMobile ? "120% center" : "bottom top";

	const video = document.getElementById("video");

	// Обработчик загрузки метаданных видео (получаем duration)
	video.onloadedmetadata = () => {
		const duration = video.duration;

		const tl = gsap
			.timeline({
				scrollTrigger: {
					trigger: "video",
					start: startValue, // или заменить на ваше значение
					end: endValue, // или заменить на ваше значение
					scrub: 0.7,
					pin: true,
				},
			})
			.fromTo(
				video,
				{
					currentTime: 0,
					scale: IsMobile ? 2 : 1.7,
					opacity: IsMobile ? 1 : 0.5,
				},
				{
					currentTime: 10,
					scale: IsMobile ? 1.8 : IsLaptope ? 1.13 : 1,
					opacity: IsMobile ? 0.5 : 1,
					ease: "none",
				}
			);

		// Привязка currentTime к прогрессу scroll
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
			{ y: 0, x: IsSmallMobile ? -200 : -100, rotation: 27 },
			0
		)
		.to(".cocktail__right-left", { y: IsSmallMobile ? 150 : 50, x: 100 }, 0);

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
			pin: true,
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

	gsap
		.timeline({
			scrollTrigger: {
				trigger: "#slider",
				start: IsMobile ? "bottom 80%" : "top top",
				end: "bottom center",
			},
		})
		.fromTo(
			"#slider",
			{ opacity: 0, yPercent: -30 },
			{ opacity: 1, yPercent: 0, duration: 1 }
		);
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
