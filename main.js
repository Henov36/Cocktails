import { animatedSlide } from "./gsap.js";

// window.addEventListener("load", () => {
const preloader = document.getElementById("preloader");
const headerContent = document.getElementById("header__content");
const mainContent = document.getElementById("main__content");

preloader.style.display = "none";
headerContent.style.display = "block";
mainContent.style.display = "block";

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
	const htmlSlide = `
					<button class="slide__nav-buttons" data-id="${item.id}">
						<h5>${item.name}</h5>
					</button>
		`;
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

	cocktailItem.innerHTML = `
		<div class="slide-content">
			<div class="img-block">
				<img class="animated-image" src="${item.image}" alt="${item.name}" />
				<span class="cocktail-arrows left-arrow left-span">
				<p class="left-text">${prevItem.name}</p>
				
				<img
					src="./img/coctailSlide/arrow.svg"
					class="cocktail-arrow-left"
					alt="Left" />
			</span>
			<span class="cocktail-arrows right-arrow right-span">
			<p class="right-text">${nextItem.name}</p>
				
				<img
					src="./img/coctailSlide/arrow.svg"
					class="cocktail-arrow-right"
					alt="Right" />
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
	`;

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

renderSlide(currentSlide); // при загрузке

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
// });

// document.addEventListener("DOMContentLoaded", () => {

// });
