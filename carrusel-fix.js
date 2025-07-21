// Script para ajustar el carrusel a pantalla completa
document.addEventListener('DOMContentLoaded', function() {
  // Asegura que el carrusel ocupe todo el ancho de la pantalla
  function adjustCarousel() {
    const carousel = document.querySelector('.carousel-hero');
    if (carousel) {
      carousel.style.width = '100vw';
      
      // Ajusta cada slide del carrusel
      const slides = document.querySelectorAll('.carousel-slide');
      slides.forEach(slide => {
        slide.style.width = '100vw';
        slide.style.backgroundSize = 'cover';
        slide.style.backgroundPosition = 'center center';
      });
    }
  }
  
  // Ejecuta la función al cargar y al cambiar el tamaño de la ventana
  adjustCarousel();
  window.addEventListener('resize', adjustCarousel);
});