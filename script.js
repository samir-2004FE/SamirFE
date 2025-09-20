const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

const backgrounds = [
  "url('logo1.png')",
  "url('logo2.png')",
  "url('Logo3.png')",
  "url('logo4.png')"
];

let current = 0;

function changeBackground() {
  document.body.style.backgroundImage = backgrounds[current];
  current = (current + 1) % backgrounds.length;
}

// Cambiar la imagen cada 5 segundos
setInterval(changeBackground, 5000);

// Establecer la primera imagen al cargar
window.onload = changeBackground;
