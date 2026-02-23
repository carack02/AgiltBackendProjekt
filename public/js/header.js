const hamburgerButton = document.querySelector(".hamburger-button");
const navMenu = document.querySelector(".nav-menu");
const backdrop = document.querySelector(".backdrop");
if (hamburgerButton && navMenu) {
	hamburgerButton.addEventListener("click", () => {
		navMenu.classList.toggle("active");
		backdrop.classList.toggle("active");
	});
}
