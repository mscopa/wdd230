const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
const modeButton = document.querySelector("#darkBtn");
const main = document.querySelector("main");
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

menu.addEventListener('click', () => {
    nav.classList.toggle('open');
    menu.classList.toggle('open');
})

modeButton.addEventListener("click", () => {
	if (modeButton.getAttribute("src") == "images/dark.webp") {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.setAttribute("src", "images/light.webp");
		modeButton.alt = "light-mode";
	} else {
        main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.setAttribute("src", "images/dark.webp");
		modeButton.alt = "dark-mode";
	}
});

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);