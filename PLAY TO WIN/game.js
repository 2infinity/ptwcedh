const startGameMenu = document.getElementById("startGameMenu");
const playButton = document.getElementById("playButton");
const develop = document.getElementById("develop");



playButton.addEventListener("click", ()=>{
  startGameMenu.classList.toggle("open");
  develop.classList.toggle("open");
});