const countdown = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const eventDate = new Date(now.getFullYear(), 11, 1); // 1 de Diciembre (mes 11, día 1)

    const currentTime = now.getTime();
    const eventTime = eventDate.getTime();
    
    const remainingTime = eventTime - currentTime;
    
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
    countdown.innerHTML = `
        <div class="time">
            <span>${days}</span>
            <span>Días</span>
        </div>
        <div class="time">
            <span>${hours}</span>
            <span>Horas</span>
        </div>
        <div class="time">
            <span>${minutes}</span>
            <span>Minutos</span>
        </div>
        <div class="time">
            <span>${seconds}</span>
            <span>Segundos</span>
        </div>`;

    setTimeout(updateCountdown, 1000);
}

updateCountdown();

/* Función para generar partículas de corazones */
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'particle-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.animationDuration = Math.random() * 4 + 8 + 's'; // Ajusta la duración de la animación
    heart.style.opacity = Math.random();
    document.getElementById('particle-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000); // Duración mayor para asegurar que el corazón desaparezca después de la animación
}

setInterval(createHeart, 300); // Intervalo de generación de partículas
