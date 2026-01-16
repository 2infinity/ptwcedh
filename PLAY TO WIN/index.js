const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");
const socialMediaBtn = document.getElementById("socialMediaBtn");
const socialMenu = document.getElementById("socialMenu");
const socialMediaIcon = document.getElementById("socialMediaIcon");







menuBtn.addEventListener("click", ()=>{
  menu.classList.toggle("open");
  menuIcon.classList.toggle("open");
});

socialMediaBtn.addEventListener("click", ()=>{
  socialMenu.classList.toggle("open");
  socialMediaBtn.classList.toggle("open");
});