// script.js

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
      return fetch(ruta)
        .then(res => res.text())
        .then(html => {
          document.getElementById(contenedorId).innerHTML = html;
        })
        .catch(err => console.error(`Error al cargar ${ruta}:`, err));
    }

    // Cargar componentes
    cargarComponente('header.html', 'header-container');
    cargarComponente('menu.html', 'menu-container').then(() => {
        const navbar = document.querySelector('.navbar');
        const header = document.getElementById('header-container');
        
        if (navbar && header) {
            // Obtener la posición inicial del navbar
            const navbarOffset = header.offsetHeight;
            
            // Función para manejar el scroll
            function handleScroll() {
                if (window.pageYOffset >= navbarOffset) {
                    // Fijar el navbar
                    navbar.style.position = 'fixed';
                    navbar.style.top = '0';
                    navbar.style.left = '0';
                    navbar.style.right = '0';
                    navbar.style.zIndex = '1000';
                    navbar.style.backgroundColor = 'white';
                    navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
                    navbar.style.width = '100%';
                } else {
                    // Volver a posición normal
                    navbar.style.position = 'static';
                    navbar.style.boxShadow = 'none';
                }
            }
            
            // Escuchar el evento scroll
            window.addEventListener('scroll', handleScroll);
            
            // Funcionalidad del menú hamburguesa
            const hamburgerBtn = document.getElementById('hamburger-btn');
            const menu = document.getElementById('menu');
            
            if (hamburgerBtn && menu) {
                hamburgerBtn.addEventListener('click', () => {
                    hamburgerBtn.classList.toggle('active');
                    menu.classList.toggle('active');
                });

                // Funcionalidad para submenús en móviles
                menu.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768) {
                        const clickedLink = e.target.closest('.main-menu-link');
                        if (clickedLink) {
                            const parentLi = clickedLink.parentElement;
                            const submenu = parentLi.querySelector('.submenu');
                            
                            if (submenu) {
                                e.preventDefault();
                                e.stopPropagation();
                                parentLi.classList.toggle('active');
                                submenu.classList.toggle('active');
                                console.log('Submenu toggled:', submenu.classList.contains('active'));
                            }
                        }
                    }
                });
            }
            

            
            console.log('Navbar fijo con scroll aplicado');
        }
    });
    cargarComponente('footer.html', 'footer-container');