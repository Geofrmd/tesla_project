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
const header = document.querySelector("header");
const children = header.children;

const links = document.querySelectorAll(".main-nav a");
const infos = document.querySelectorAll(".info");

const s5imgContainer = document.querySelector(".s5img-container");
const imgOffSetTop = s5imgContainer.offsetTop;

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

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= imgOffSetTop) {
    s5imgContainer.style.position = "fixed";
    s5imgContainer.style.top = 0;
    s5imgContainer.style.width = "100%";
  } else {
    s5imgContainer.style.position = "static";
  }
});
