const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const messageEl = document.getElementById('message');
const music = document.getElementById('bg-music');
const flowerContainer = document.getElementById('flower-container');

const mensajes = [
    "Hola. Escribo este primer mensaje porque quería hacer algo especial...",
    "A veces un solo texto no alcanza para decir todo lo que tengo en mente.",
    "Quería que este pequeño detalle te sacara una sonrisa.",
    "Espero de veerdad que te guste y que lo disfrutes tanto como yo disfruté creándolo.",
    "Quiero que sepas que eres de verdad super especial para mí y que me haces muy feliz.",
    "Yo no esperaba sentirme así por ti, pero me alegra que haya pasado, maybe lo digo demasiado, peeero de verdad te quiero,",
    "y me encantaría que me dieras la oportunidad de demostrarte que puedo hacerte feliz.",
    "No sé si esto es lo que esperabas, pero de verdad espero que te guste.",
    "Gracias por leer hasta aquí. Te mando un abrazo enorme y un beso.",
    "Con cariño,",
    "Chuky."
];

let mensajeActual = 0;
let charIndex = 0;
let isTyping = false;

function typeWriter() {
    isTyping = true;
    if (charIndex < mensajes[mensajeActual].length) {
        messageEl.innerHTML += mensajes[mensajeActual].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 40); 
    } else {
        isTyping = false;
        if (mensajeActual < mensajes.length - 1) {
            nextBtn.style.display = 'inline-block';
        }
    }
}

function createFlowers() {
    for (let i = 0; i < 40; i++) {
        let flower = document.createElement('div');
        flower.classList.add('flower');
        
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = Math.random() * 4 + 3 + 's'; 
        flower.style.animationDelay = Math.random() * 5 + 's';
        
        const colors = ['#ffb7b2', '#ffdac1', '#e2f0cb'];
        flower.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        flowerContainer.appendChild(flower);
    }
}

startBtn.addEventListener('click', () => {
    music.play().catch(e => console.log("La reproducción automática puede requerir interacción."));
    startBtn.style.display = 'none';
    createFlowers();
    typeWriter();
});

nextBtn.addEventListener('click', () => {
    if (!isTyping) {
        nextBtn.style.display = 'none';
        messageEl.innerHTML = ''; 
        charIndex = 0;
        mensajeActual++;
        typeWriter(); 
    }
});