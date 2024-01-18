const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {
    nav.classList.toggle('open');
    menu.classList.toggle('open');
})

const modeButton = document.querySelector("#darkBtn");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.getAttribute("src") == "images/dark.svg") {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.setAttribute("src", "images/light.svg");
		modeButton.alt = "light-mode";
	} else {
        main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.setAttribute("src", "images/dark.svg");
		modeButton.alt = "dark-mode";
	}
});