const menuIcon = document.querySelector(".nv-meniu");
const navbar = document.querySelector(".navbar-meniu");

menuIcon.addEventListener("click", () => {
	navbar.classList.toggle("change");
});

document.querySelector(".button-F1").addEventListener("click", () => {
	document.querySelector('.F2_background').scrollIntoView({ 
		behavior: 'smooth' 
	});
});