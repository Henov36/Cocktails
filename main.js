// import { animatedSlide } from "./gsap.js";

// const sliderLists = [
// 	{
// 		id: 1,
// 		name: "Classic Mojito",
// 		image: "./img/coctailSlide/classic.avif",
// 		title: "Simple Ingredients, Bold Flavor",
// 		description:
// 			"Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
// 	},
// 	{
// 		id: 2,
// 		name: "Raspberry Mojito",
// 		image: "./img/coctailSlide/1.avif",
// 		title: "A Zesty Classic That Never Fails",
// 		description:
// 			"The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
// 	},
// 	{
// 		id: 3,
// 		name: "Violet Breeze",
// 		image: "./img/coctailSlide/violet.avif",
// 		title: "Simple Ingredients, Bold Flavor",
// 		description:
// 			"Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
// 	},
// 	{
// 		id: 4,
// 		name: "Curacao Mojito",
// 		image: "./img/coctailSlide/tipsy.avif",
// 		title: "Crafted With Care, Poured With Love",
// 		description:
// 			"Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
// 	},
// ];

// const slideContainer = document.querySelector(".slide__nav");
// const cocktailItem = document.querySelector(".coctail__item");
// const header = document.getElementById("header__content");
// if (!slideContainer || !cocktailItem) {
// 	console.warn("[mojito] slide containers not found");
// }

// if (slideContainer) {
// 	const navHtml = sliderLists
// 		.map(
// 			(s) =>
// 				`<button class="slide__nav-buttons" data-id="${s.id}"><h5>${s.name}</h5></button>`
// 		)
// 		.join("");
// 	slideContainer.insertAdjacentHTML("beforeend", navHtml);
// }

// let currentSlide = 1;

// const setActiveButton = (id) => {
// 	if (!slideContainer) return;
// 	[...slideContainer.querySelectorAll(".slide__nav-buttons")].forEach((btn) =>
// 		btn.classList.toggle("active-button", Number(btn.dataset.id) === id)
// 	);
// };

// const clampIndex = (i) =>
// 	((i - 1 + sliderLists.length) % sliderLists.length) + 1;

// function renderSlide(id, direction = "right") {
// 	const item = sliderLists.find((s) => s.id === id);
// 	if (!item || !cocktailItem) return;

// 	const idx = sliderLists.findIndex((s) => s.id === id);
// 	const prev = sliderLists[clampIndex(idx) - 1] ?? sliderLists.at(-1);
// 	const next = sliderLists[clampIndex(idx + 2) - 1] ?? sliderLists[0];

// 	cocktailItem.innerHTML = `
//     <div class="slide-content" data-id="${item.id}">
//       <div class="img-block">
//         <img class="animated-image c${item.id}" src="${item.image}" alt="${item.name}">
//         <span class="cocktail-arrows left-arrow left-span">
//           <p class="left-text">${prev.name}</p>
//           <img src="./img/coctailSlide/arrow.svg" class="cocktail-arrow-left" alt="Left">
//         </span>
//         <span class="cocktail-arrows right-arrow right-span">
//           <p class="right-text">${next.name}</p>
//           <img src="./img/coctailSlide/arrow.svg" class="cocktail-arrow-right" alt="Right">
//         </span>
//       </div>

//       <div class="slide__content">
//         <div class="margin-block">
//           <span>Recipes for:</span>
//           <h5>${item.name}</h5>
//         </div>
//         <div class="slide-des">
//           <h2>${item.title}</h2>
//           <p>${item.description}</p>
//         </div>
//       </div>
//     </div>
//   `;

// 	const root = cocktailItem.querySelector(".slide-content");
// 	if (root) animatedSlide(root, direction);
// 	setActiveButton(id);
// }

// if (cocktailItem) {
// 	cocktailItem.addEventListener(
// 		"click",
// 		(e) => {
// 			const right = e.target.closest(".right-span");
// 			const left = e.target.closest(".left-span");
// 			if (!right && !left) return;

// 			currentSlide = right
// 				? clampIndex(currentSlide + 1)
// 				: clampIndex(currentSlide - 1);
// 			renderSlide(currentSlide, right ? "right" : "left");
// 		},
// 		{ passive: true }
// 	);
// }

// if (slideContainer) {
// 	slideContainer.addEventListener("click", (e) => {
// 		const btn = e.target.closest(".slide__nav-buttons");
// 		if (!btn) return;
// 		e.preventDefault();
// 		const id = Number(btn.dataset.id);
// 		if (!id || id === currentSlide) return;
// 		currentSlide = id;
// 		renderSlide(currentSlide, "right");
// 	});
// }

// renderSlide(currentSlide);
import { animatedSlide } from "./gsap.js";

const sliderLists = [
	{
		id: 1,
		name: "Classic Mojito",
		image: "./img/coctailSlide/classic.png",
		title: "Simple Ingredients, Bold Flavor	",
		description:
			"Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
	},
	{
		id: 2,
		name: "Raspberry Mojito",
		image: "./img/coctailSlide/1.png",
		title: "A Zesty Classic That Never Fails",
		description:
			"The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
	},
	{
		id: 3,
		name: "Violet Breeze",
		image: "./img/coctailSlide/violet.png",
		title: "Simple Ingredients, Bold Flavor",
		description:
			"Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
	},
	{
		id: 4,
		name: "Curacao Mojito",
		image: "./img/coctailSlide/tipsy.png",
		title: "Crafted With Care, Poured With Love",
		description:
			"Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
	},
];
const slideContainer = document.querySelector(".slide__nav");
const cocktailItem = document.querySelector(".coctail__item");

sliderLists.forEach((item) => {
	const htmlSlide = (
		<button class="slide__nav-buttons" data-id="${item.id}">
			<h5>${item.name}</h5>
		</button>
	);
	slideContainer.insertAdjacentHTML("beforeend", htmlSlide);
});

function renderSlide(id, direction = "right") {
	const item = sliderLists.find((slide) => slide.id === id);
	if (!item) return;

	const currentIndex = sliderLists.findIndex((slide) => slide.id === id);
	const prevIndex =
		(currentIndex - 1 + sliderLists.length) % sliderLists.length;
	const nextIndex = (currentIndex + 1) % sliderLists.length;

	const prevItem = sliderLists[prevIndex];
	const nextItem = sliderLists[nextIndex];

	cocktailItem.innerHTML = (
		<div class="slide-content">
			<div class="img-block">
				<img
					class="animated-image c${item.id}"
					src="${item.image}"
					alt="${item.name}"
				/>
				<span class="cocktail-arrows left-arrow left-span">
					<p class="left-text">${prevItem.name}</p>

					<img
						src="./img/coctailSlide/arrow.svg"
						class="cocktail-arrow-left"
						alt="Left"
					/>
				</span>
				<span class="cocktail-arrows right-arrow right-span">
					<p class="right-text">${nextItem.name}</p>

					<img
						src="./img/coctailSlide/arrow.svg"
						class="cocktail-arrow-right"
						alt="Right"
					/>
				</span>
			</div>
			<div class="slide__content">
				<div class="margin-block">
					<span>Recipes for:</span>
					<h5>${item.name}</h5>
				</div>
				<div class="slide-des">
					<h2>${item.title}</h2>
					<p>${item.description}</p>
				</div>
			</div>
		</div>
	);

	animatedSlide(id, direction);

	// 👉 Добавим слушатели на только что отрендеренные стрелки:
	const newLeftArrow = document.querySelector(".left-span");
	const newRightArrow = document.querySelector(".right-span");

	newRightArrow.addEventListener("click", (e) => {
		e.preventDefault();
		currentSlide = currentSlide + 1 > sliderLists.length ? 1 : currentSlide + 1;
		updateActiveSlide();
		renderSlide(currentSlide, "right");
	});

	newLeftArrow.addEventListener("click", (e) => {
		e.preventDefault();
		currentSlide = currentSlide - 1 < 1 ? sliderLists.length : currentSlide - 1;
		updateActiveSlide();
		renderSlide(currentSlide, "left");
	});
}

const slideNavButtons = document.querySelectorAll(".slide__nav-buttons");
let currentSlide = 1;

renderSlide(currentSlide);

function updateActiveSlide() {
	slideNavButtons.forEach((button) => {
		const buttonId = parseInt(button.getAttribute("data-id"));

		if (buttonId === currentSlide) {
			button.classList.add("active-button");
		} else {
			button.classList.remove("active-button");
		}
	});
}

updateActiveSlide();

slideNavButtons.forEach((button) => {
	const buttonId = parseInt(button.getAttribute("data-id"));

	button.addEventListener("click", (e) => {
		e.preventDefault();
		if (currentSlide === buttonId) return;
		currentSlide = buttonId;
		updateActiveSlide();
		renderSlide(currentSlide);
	});
});
