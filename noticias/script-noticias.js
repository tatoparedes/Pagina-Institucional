// script-noticias.js

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

// Cargar el header
cargarComponente('../header.html', 'header-container').then(() => {
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
      topBar.style.display = 'flex';
      topBar.style.justifyContent = 'flex-end';
      topBar.style.backgroundColor = '#99001f';
      topBar.style.color = 'white';
      topBar.style.fontSize = '14px';
      topBar.style.gap = '20px';
      topBar.style.zIndex = '999';
      topBar.style.paddingRight = '20px';
    }

    const contactInfo = headerContainer.querySelector('.contact-info');
    if (contactInfo) {
      contactInfo.style.margin = '0';
      contactInfo.style.padding = '0';
    }

    // Corregir rutas de imágenes en el header
    const headerImages = headerContainer.querySelectorAll('img');
    headerImages.forEach(img => {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http') && !src.startsWith('../')) {
        img.setAttribute('src', '../' + src);
      }
    });

    // Forzar estilos de enlaces en top-bar
    const topBarLinks = headerContainer.querySelectorAll('.top-bar a');
    topBarLinks.forEach(link => {
      link.style.color = 'white';
      link.style.textDecoration = 'none';
      link.style.display = 'flex';
      link.style.alignItems = 'center';
      link.style.gap = '5px';
    });
  }
});

// Cargar el menú
cargarComponente('../menu.html', 'menu-container').then(() => {
  const navbar = document.querySelector('.navbar');
  const header = document.getElementById('header-container');
  const menuContainer = document.getElementById('menu-container');

  if (menuContainer) {
    // Corregir rutas de imágenes en el menú
    const menuImages = menuContainer.querySelectorAll('img');
    menuImages.forEach(img => {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http') && !src.startsWith('../')) {
        img.setAttribute('src', '../' + src);
      }
    });

    // Corregir enlaces del menú
    const menuLinks = menuContainer.querySelectorAll('a[href]');
    menuLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('../') && !href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('tel')) {
        link.setAttribute('href', '../' + href);
      }
    });
  }

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

  // Forzar estilos de dropdown del menú
  const dropdownMenus = menuContainer.querySelectorAll('.dropdown-menu');
  dropdownMenus.forEach(dropdown => {
    dropdown.style.backgroundColor = '#99001f';
    dropdown.style.border = 'none';
  });

  const dropdownItems = menuContainer.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    item.style.color = 'white';
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = '#cc0011';
      item.style.color = 'white';
    });
    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = 'transparent';
      item.style.color = 'white';
    });
  });
});

// Cargar footer
cargarComponente('../footer.html', 'footer-container').then(() => {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    // Corregir rutas de imágenes en el footer
    const footerImages = footerContainer.querySelectorAll('img');
    footerImages.forEach(img => {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http') && !src.startsWith('../')) {
        img.setAttribute('src', '../' + src);
      }
    });

    // Corregir enlaces del footer
    const footerLinks = footerContainer.querySelectorAll('a[href]');
    footerLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('../') && !href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('tel')) {
        link.setAttribute('href', '../' + href);
      }
    });
  }
});