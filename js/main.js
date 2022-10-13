const menuBurger = document.querySelector(".fa-bars");
const menuShadow = document.querySelector(".navbar-shadow");

//poprawic funkcje, zeby wracalo do piewotnej postaci + sprawdzic na iPadzie
function addMenuShadow() {
	menuShadow.style.height = "1200px";
}

menuBurger.addEventListener("click", addMenuShadow);
