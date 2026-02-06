// ELEMENTOS
const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");
const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");
const resultado = document.getElementById("resultado");

// AL ABRIR EL SOBRE
sobre.addEventListener("click", () => {
  // Animación de sobre desapareciendo
  sobre.style.transform = "scale(0)";
  sobre.style.opacity = "0";

  // Mostrar la carta después de animación
  setTimeout(() => {
    sobre.style.display = "none";
    carta.style.display = "block";
  }, 500);
});

// FUNCIÓN BOTÓN "Sí"
botonSi.addEventListener("click", () => {
  resultado.innerText = "Sabía que dirías que sí❤️";
});

// BOTÓN "No" que esquiva y aumenta "Sí"
function esquivarNo() {
  // Mover "No"
  const maxX = 40;
  const maxY = 20;
  const x = Math.random() * maxX - maxX / 2;
  const y = Math.random() * maxY - maxY / 2;
  botonNo.style.transform = `translate(${x}px, ${y}px)`;

  // Agrandar "Sí"
  const style = window.getComputedStyle(botonSi);
  const transformMatrix = style.transform;
  let currentScale = 1;
  if (transformMatrix && transformMatrix !== "none") {
    const values = transformMatrix.split("(")[1].split(")")[0].split(",");
    currentScale = parseFloat(values[0]); // scaleX
  }
  const newScale = currentScale + 0.1;
  botonSi.style.transform = `scale(${newScale})`;
}

// ESCUCHA "No" en desktop
botonNo.addEventListener("mouseover", esquivarNo);

// ESCUCHA "No" en mobile
botonNo.addEventListener("touchstart", esquivarNo);
