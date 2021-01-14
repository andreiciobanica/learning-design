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

document.querySelector(".filme").addEventListener("click", () => {
	document.querySelector('.F4_background').scrollIntoView({ 
		behavior: 'smooth' 
	});
});

document.querySelector(".retete").addEventListener("click", () => {
	document.querySelector('.F5_background').scrollIntoView({ 
		behavior: 'smooth' 
	});
});

document.querySelector(".idei").addEventListener("click", () => {
	document.querySelector('.F6_background').scrollIntoView({ 
		behavior: 'smooth' 
	});
});