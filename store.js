$(document).ready(function() {
  // Aquí puedes agregar cualquier interacción que desees
  // Por ejemplo, podrías hacer que los íconos reaccionen a un clic
  $('.icon').click(function() {
      $(this).toggleClass('active');
  });

  // Remueve la clase 'hidden' y agrega 'active' para aplicar animación
  $('.product-item').removeClass('hidden').addClass('active');
});
