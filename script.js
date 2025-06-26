// script.js

function mostrarModal(ruta) {
  document.getElementById('visor').src = ruta;
  document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('visor').src = '';
}

function cargarComponente(ruta, contenedorId) {
  return fetch(ruta)
    .then(res => res.text())
    .then(html => {
      document.getElementById(contenedorId).innerHTML = html;
    })
    .catch(err => console.error(`Error al cargar ${ruta}:`, err));
}

// Oculta el carrusel hasta que cargue el header
const carrusel = document.querySelector('.carousel-hero');
if (carrusel) {
  carrusel.style.visibility = 'hidden';
}

// Cargar el header
cargarComponente('header.html', 'header-container').then(() => {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.style.margin = '0';
    headerContainer.style.padding = '0';

    const mainHeader = headerContainer.querySelector('.main-header');
    if (mainHeader) {
      mainHeader.style.margin = '0';
      mainHeader.style.padding = '0';
    }

    const topBar = headerContainer.querySelector('.top-bar');
    if (topBar) {
      topBar.style.margin = '0';
      topBar.style.padding = '5px 10px';
    }

    const contactInfo = headerContainer.querySelector('.contact-info');
    if (contactInfo) {
      contactInfo.style.margin = '0';
      contactInfo.style.padding = '0';
    }
  }

  // Mostrar carrusel una vez cargado el header
  if (carrusel) {
    carrusel.style.visibility = 'visible';
  }
});

// Cargar el menú
cargarComponente('menu.html', 'menu-container').then(() => {
  const navbar = document.querySelector('.navbar');
  const header = document.getElementById('header-container');

  if (navbar && header) {
    const navbarOffset = header.offsetHeight;

    function handleScroll() {
      if (window.pageYOffset >= navbarOffset) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.left = '0';
        navbar.style.right = '0';
        navbar.style.zIndex = '1000';
        navbar.style.backgroundColor = 'white';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        navbar.style.width = '100%';
      } else {
        navbar.style.position = 'static';
        navbar.style.boxShadow = 'none';
      }
    }

    window.addEventListener('scroll', handleScroll);

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const menu = document.getElementById('menu');

    if (hamburgerBtn && menu) {
      hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        menu.classList.toggle('active');
      });

      menu.addEventListener('click', function (e) {
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

// Cargar footer
cargarComponente('footer.html', 'footer-container');
