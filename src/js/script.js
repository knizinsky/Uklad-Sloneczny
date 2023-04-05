const hiddenMenu = document.querySelector(".hiddenMenu");
const burger = document.querySelector(".burger");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const hiddenLinks = document.querySelectorAll(".hiddenMenu__link");

const hiddenMenuSwitch = () => {
	hiddenMenu.classList.toggle("navActive");
	line2.classList.toggle("line2--active");
	line3.classList.toggle("line3--active");
};

burger.addEventListener("click", hiddenMenuSwitch);

hiddenLinks.forEach(link => {
	link.addEventListener("click", hiddenMenuSwitch);
});