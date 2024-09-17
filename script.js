//NavBar
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const burgerImage = document.getElementById('burger-image');

const hamburgerIcon = './Images/burger-bar (1).png';
const closeIcon = './Images/close-2.png';



burger.onclick = function() {
  if (navLinks.style.display === 'none' || navLinks.style.display === '') {
    navLinks.style.display = 'block';
    burgerImage.src = closeIcon;
  } else {
    navLinks.style.display = 'none';
    burgerImage.src = hamburgerIcon;
  }
};


// Active Class
var buttn = document.getElementById("portfolio-button");

buttn.onmouseover = function(){
buttn.style.backgroundColor = "transparent";
buttn.style.border = '1px solid rgb(192, 56, 56)';
buttn.style.color = 'white';
}
buttn.onmouseout = function(){
  buttn.style.backgroundColor = "rgb(192, 56, 56)";
  buttn.style.color = 'white';
}