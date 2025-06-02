// script.js
// (Opcional: Puedes agregar lógica JS adicional más adelante)
document.addEventListener('DOMContentLoaded', () => {
    // Aquí puedes agregar interacciones como menús desplegables con clic si lo deseas
    const menuItems = document.querySelectorAll('.menu > li');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const submenu = item.querySelector('ul');
            if (submenu) {
                submenu.style.display = (submenu.style.display === 'flex') ? 'none' : 'flex';
            }
        });
    });
});

 function mostrarModal(ruta) {
      document.getElementById('visor').src = ruta;
      document.getElementById('modal').style.display = 'flex';
    }

    function cerrarModal() {
      document.getElementById('modal').style.display = 'none';
      document.getElementById('visor').src = '';
    }

    // También cerrar si se hace clic fuera del contenido
    window.onclick = function(event) {
      const modal = document.getElementById('modal');
      if (event.target === modal) {
        cerrarModal();
      }
    }