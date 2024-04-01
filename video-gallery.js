// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar los elementos necesarios
    const titles = document.querySelectorAll('.video-title');
    const subtitles = document.querySelectorAll('.video-subtitle');
    const videos = document.querySelectorAll('.video-item');
    const playButtons = document.querySelectorAll('.play-btn');
  
    // Animación para los títulos y subtítulos
    titles.forEach(title => {
      title.style.opacity = '0';
      title.style.transform = 'translateY(20px)';
      setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 500);
    });
  
    subtitles.forEach(subtitle => {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 700);
    });
  
    // Animación para los videos y botones de reproducción
    videos.forEach((video, index) => {
      video.style.opacity = '0';
      video.style.transform = 'translateY(20px)';
      setTimeout(() => {
        video.style.opacity = '1';
        video.style.transform = 'translateY(0)';
      }, 1000 + index * 200);
  
      playButtons[index].addEventListener('click', () => {
        // Simular la reproducción del video (puedes agregar tu propia lógica aquí)
        console.log(`Reproduciendo video ${index + 1}`);
      });
    });
  });
  