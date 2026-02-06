const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");
const final = document.getElementById("final");
const btnSi = document.getElementById("si");
const btnNo = document.getElementById("no");
const btnWrapper = document.getElementById("btnWrapper");
const mensaje = document.getElementById("mensaje");

let escalaSi = 1;
let intentos = 0;

const frases = [
    "¿Amor y un sí?",
    "Di que sí 🥺",
    "Mmm… intenta otra vez",
    "Ese botón no quiere",
    "El rojo se ve bonito ❤️",
    "Ya casi 😍",
    "No hay escapatoria 😏",
    "Es el destino 💕"
];

/* EXTRA PRO: vibración + apertura */
sobre.addEventListener("click", () => {
    sobre.classList.add("shake");

    setTimeout(() => {
        sobre.style.transform = "scale(0) translateY(-120px)";
        sobre.style.opacity = "0";
    }, 400);

    setTimeout(() => {
        sobre.style.display = "none";
        carta.style.display = "flex";
    }, 800);
});

/* BOTÓN NO */
function moverNo() {
    intentos++;
    mensaje.innerText = frases[Math.min(intentos - 1, frases.length - 1)];

    escalaSi += 0.15;
    btnSi.style.transform = `scale(${escalaSi})`;

    btnWrapper.style.flexDirection = "row";


    const offset = escalaSi * 20;
    btnNo.style.transform = `translateX(${intentos % 2 ? offset : -offset}px)`;
}

btnNo.addEventListener("click", moverNo);
btnNo.addEventListener("mouseover", () => {
    if (window.innerWidth > 600) moverNo();
});

/* BOTÓN SÍ */
btnSi.addEventListener("click", () => {
    carta.style.display = "none";
    final.style.display = "flex";
    lluvia();
});

function lluvia() {
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const h = document.createElement("div");
            h.classList.add("heart");
            h.innerHTML = "❤️";
            h.style.left = Math.random() * 100 + "vw";
            h.style.bottom = "-5vh";
            h.style.fontSize = Math.random() * 20 + 15 + "px";
            h.style.animationDuration = Math.random() * 2 + 2 + "s";
            document.body.appendChild(h);
            setTimeout(() => h.remove(), 4000);
        }, i * 120);
    }
}
