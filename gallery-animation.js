const images = document.querySelectorAll('.image-gallery img');

let translateValue = 0;

function animateImages() {
  translateValue -= 320; // Ancho de la imagen más el margen entre ellas
  images.forEach(image => {
    image.style.transform = `translateX(${translateValue}px)`;
  });
}

// Repite la animación cada cierto intervalo de tiempo (en milisegundos)
setInterval(animateImages, 3000); // Cambia el valor 3000 según la velocidad
