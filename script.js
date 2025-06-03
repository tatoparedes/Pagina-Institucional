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
     function cargarComponente(ruta, contenedorId) {
      fetch(ruta)
        .then(res => res.text())
        .then(html => {
          document.getElementById(contenedorId).innerHTML = html;
        })
        .catch(err => console.error(`Error al cargar ${ruta}:`, err));
    }

    // Cargar componentes
    cargarComponente('header.html', 'header-container');
    cargarComponente('menu.html', 'menu-container');  // Opcional
    cargarComponente('footer.html', 'footer-container');