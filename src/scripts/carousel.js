document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del carrusel
    const carousel = document.querySelector("[data-carousel='static']");
    const items = carousel.querySelectorAll("[data-carousel-item]");
    const prevButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
  
    // Inicializar variables
    let currentIndex = 0;
  
    // Función para mostrar el ítem actual
    function showCurrentItem() {
      items.forEach(function(item, index) {
        if (index === currentIndex) {
          item.classList.add("block");
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
          item.classList.remove("block");
        }
      });
    }
  
    // Función para mostrar el ítem siguiente
    function showNextItem() {
      currentIndex = (currentIndex + 1) % items.length;
      showCurrentItem();
    }
  
    // Función para mostrar el ítem anterior
    function showPreviousItem() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showCurrentItem();
    }
  
    // Agregar eventos a los botones de navegación
    prevButton.addEventListener("click", showPreviousItem);
    nextButton.addEventListener("click", showNextItem);
    
    // Mostrar el primer ítem
    showCurrentItem();
  });