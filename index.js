let playOnce = true;
const btnVehicules = document.getElementById("btn-1");
const navVehicules = document.querySelector(".vehicule-nav");
const btnEnergie = document.getElementById("btn-2");
const navEnergie = document.querySelector(".energie-nav");
const btnRecharge = document.getElementById("btn-3");
const btnDecouvrir = document.getElementById("btn-4");
const btnShop = document.getElementById("btn-5");
const headerNav = document.getElementById("header-nav");
const mainLogo = document.querySelectorAll(".st0");
const leftNav = document.querySelector(".left-nav-items");
const mainNavBtn = document.querySelectorAll(".mn-btn");

const links = document.querySelectorAll(".main-nav a");
const infos = document.querySelectorAll(".info");

links.forEach((link, index) => {
  link.addEventListener("mouseover", () => {
    
    infos.forEach((info) => info.classList.remove("active"));
    infos[index].classList.add("active");
    leftNav.style.color = "black";
    headerNav.style.background = "white";
    mainLogo.forEach((element) => {
      element.style.fill = "black";
    });
    mainNavBtn.forEach((btn) => {
      btn.style.color = "black";
    });
  });
});

// btnVehicules.addEventListener("click", (e) => {
//   e.preventDefault();
// });
// btnVehicules.addEventListener("mouseover", (e) => {
//   navVehicules.classList.toggle("active");
//   navVehicules.style.opacity = "1";
//   btnVehicules.style.color = "black";
// leftNav.style.color = "black";
// headerNav.style.background = "white";
// mainLogo.forEach((element) => {
//   element.style.fill = "black";
// });
// mainNavBtn.forEach((btn) => {
//   btn.style.color = "black";
// });
// });

// btnEnergie.addEventListener("click", (e) => {
//   e.preventDefault();
// });
// btnEnergie.addEventListener("mouseover", () => {
//   navEnergie.classList.toggle("active");
// });
