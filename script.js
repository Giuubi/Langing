document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para el SEGUNDO carrusel ---
    const carruselSecundario = document.getElementById('carrusel-secundario');

    if (carruselSecundario) {
        const carruselPista = carruselSecundario.querySelector('.content-carrusel');
        const tarjetas = carruselSecundario.querySelectorAll('.card');
        const puntos = carruselSecundario.querySelectorAll('.punto');

        // Permite que los puntos muevan el carrusel con un clic
        puntos.forEach((punto, indice) => {
            punto.addEventListener('click', (e) => {
                e.preventDefault();
                // Usa scrollIntoView para el segundo carrusel
                tarjetas[indice].scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Sincroniza los puntos con el desplazamiento del carrusel
        carruselPista.addEventListener('scroll', () => {
            let indiceActual = 0;
            const scrollLeft = carruselPista.scrollLeft;
            const anchoVisible = carruselPista.offsetWidth;

            for (let i = 0; i < tarjetas.length; i++) {
                if (tarjetas[i].offsetLeft <= scrollLeft + (anchoVisible / 2)) {
                    indiceActual = i;
                }
            }

            puntos.forEach(p => p.classList.remove('activo'));
            puntos[indiceActual].classList.add('activo');
        });
        
        // Inicializa el primer punto como activo al cargar
        puntos[0].classList.add('activo');
    }
});


document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para el TERCER carrusel ---
    const carruselTercero = document.getElementById('tercer-carrusel');

    if (carruselTercero) {
        const carruselContainer = carruselTercero.querySelector('.carrusel3-container');
        const cards = carruselTercero.querySelectorAll('.card-item-c');
        const dots = carruselTercero.querySelectorAll('.dot');

        // Permite que los puntos muevan el carrusel con un clic
        dots.forEach((dot, index) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                // Usa scrollIntoView para mover el carrusel
                cards[index].scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Sincroniza los puntos con el desplazamiento del carrusel
        carruselContainer.addEventListener('scroll', () => {
            let currentIndex = 0;
            const scrollLeft = carruselContainer.scrollLeft;
            const visibleWidth = carruselContainer.offsetWidth;

            for (let i = 0; i < cards.length; i++) {
                // Si el inicio de la tarjeta está a la vista, o si su centro está a la vista, la consideramos la tarjeta actual
                if (cards[i].offsetLeft <= scrollLeft + (visibleWidth / 2)) {
                    currentIndex = i;
                }
            }

            dots.forEach(p => p.classList.remove('active'));
            if (dots[currentIndex]) {
                dots[currentIndex].classList.add('active');
            }
        });

        // Inicializa el primer punto como activo al cargar
        if (dots.length > 0) {
            dots[0].classList.add('active');
        }
    }
});

// --- codigo de boton de pusa ---

document.addEventListener('DOMContentLoaded', () => {

    // Obtiene la referencia al elemento de video usando su ID.
    const video = document.getElementById('video1');
    
    // Obtiene la referencia a tu botón de pausa personalizado usando su ID.
    const pauseBtn = document.getElementById('pauseBtn1');

    // Agrega un "escuchador de eventos" que detecta cuando el usuario hace clic en el botón.
    pauseBtn.addEventListener('click', () => {
        // Verifica si el video está actualmente en pausa.
        if (video.paused) {
            // Si está en pausa, lo reproduce.
            video.play();
        } else {
            // Si se está reproduciendo, lo pausa.
            video.pause();
        }
    });

    // También es importante escuchar los eventos del video para mantener el ícono del botón sincronizado.

    // Escucha cuando el video se pone en pausa y cambia el ícono del botón a "reproducir".
    video.addEventListener('pause', () => {
        pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

    // Escucha cuando el video se reproduce y cambia el ícono del botón a "pausa".
    video.addEventListener('play', () => {
        pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    });
});