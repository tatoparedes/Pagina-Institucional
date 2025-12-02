//carrusel index.js

  let currentSlide=0;
    const slides=document.querySelectorAll('.carousel-slide');
    const showSlide=i=>slides.forEach((s,idx)=>s.classList.toggle('active',idx===i));
    const nextSlide=()=>{currentSlide=(currentSlide+1)%slides.length;showSlide(currentSlide);};
    setInterval(nextSlide,5000);showSlide(currentSlide);

    //programas dinamicos

     const programData={
      asistencia:{
        title:"Asistencia Administrativa",
        description:"El programa de estudios en Asistencia Administrativa forma profesionales técnicos competentes para ejecutar tareas administrativas en organizaciones públicas y privadas. Los egresados son capaces de organizar documentos, redactar informes, brindar atención al cliente, coordinar reuniones, utilizar herramientas de ofimática, manejar archivos y apoyar en procesos contables y logísticos. Su formación está orientada a la eficiencia, la responsabilidad y la ética, siendo piezas clave en el funcionamiento de cualquier institución.",
        link:"asistencia-admin.html"
      },
      contabilidad:{
        title:"Contabilidad",
        description:"El programa de Contabilidad prepara técnicos especialistas en el registro, análisis e interpretación de operaciones financieras y tributarias. Los egresados están capacitados para aplicar normas contables vigentes, elaborar estados financieros, calcular impuestos, controlar costos y apoyar la toma de decisiones dentro de empresas e instituciones públicas. Su formación incluye dominio de software contable, manejo documental y comprensión del sistema financiero, con un enfoque práctico y actualizado.",
        link:"contabilidad.html"
      },
      diseno:{
        title:"Diseño y Programación Web",
        description:"Este programa está enfocado en formar profesionales técnicos que dominen las herramientas y lenguajes de programación para el desarrollo de sitios web interactivos, responsivos y funcionales. Los egresados son capaces de diseñar interfaces atractivas (UI/UX), codificar en HTML, CSS, JavaScript y trabajar con bases de datos y frameworks modernos. Además, están preparados para gestionar proyectos web, optimizar rendimiento y garantizar una experiencia de usuario de calidad, integrándose con facilidad al mundo digital.",
        link:"diseno-web.html"
      },
      enfermeria:{
        title:"Enfermería Técnica",
        description:"El programa de Enfermería Técnica capacita a profesionales para brindar atención integral en salud, trabajando en conjunto con el equipo médico y aplicando protocolos clínicos. Los estudiantes desarrollan competencias en atención al paciente, procedimientos básicos y especializados, promoción de la salud, apoyo en cirugías menores, cuidado del adulto mayor, del niño y del paciente crítico. La formación se basa en principios éticos, humanísticos y científicos, con prácticas en centros hospitalarios y clínicas.",
        link:"enfermeria.html"
      },
      guia:{
        title:"Guía Oficial de Turismo",
        description:"Este programa forma guías turísticos con sólidos conocimientos en historia, cultura, patrimonio y geografía del Perú. Los egresados están preparados para planificar, liderar y conducir rutas turísticas de manera segura, atractiva y sostenible. Además, desarrollan habilidades comunicativas, dominio de idiomas extranjeros, técnicas de interpretación del patrimonio y conocimientos en primeros auxilios. Su rol es clave en la promoción del turismo y la identidad nacional.",
        link:"guia-turismo.html"
      },
      laboratorio:{
        title:"Laboratorio Clínico y Anatomía Patológica",
        description:"Este programa desarrolla competencias para realizar procedimientos de análisis clínicos y de anatomía patológica que permitan contribuir al diagnóstico médico. Los egresados aprenden técnicas de recolección y procesamiento de muestras biológicas, uso de equipos de laboratorio, preparación de tejidos, coloración histológica y manejo de bioseguridad. Su formación está orientada a la precisión científica, el trabajo en equipo y el respeto de normas sanitarias vigentes.",
        link:"laboratorio-clinico.html"
      },
      marketing:{
        title:"Marketing",
        description:"El programa de Marketing forma profesionales capaces de diseñar e implementar estrategias comerciales, digitales y tradicionales para posicionar marcas y productos. Los egresados manejan herramientas de investigación de mercados, análisis del consumidor, publicidad, diseño de campañas, branding y ventas. Están preparados para innovar en entornos competitivos y dinámicos, adaptándose a las tendencias del marketing digital y utilizando plataformas tecnológicas para captar y fidelizar clientes.",
        link:"marketing.html"
      }
    };

    /* Manejo de clics en el menú */
    document.querySelectorAll('.program-item').forEach(li=>{
      li.addEventListener('click',()=>{
        /* Cambiar resaltado */
        document.querySelectorAll('.program-item').forEach(el=>el.classList.remove('active'));
        li.classList.add('active');

        /* Datos */
        const key=li.dataset.program;
        const data=programData[key];

        /* Actualizar contenido */
        document.getElementById('program-title').textContent=data.title;
        document.getElementById('program-description').textContent=data.description;
        const link=document.getElementById('program-link');
        link.href=data.link;
        link.target="_blank";          /* Abre en pestaña nueva */
      });
    });
 // Mostrar modal al cargar la página
 // Mostrar primer modal al cargar la página

 
window.onload = function () {
  document.getElementById('modal-banner-5').style.display = "block";
};

// Función para cerrar el primer modal y abrir el segundo
function closeModal1() {
  document.getElementById('modal-banner').style.display = 'none';
  document.getElementById('modal-banner-2').style.display = 'block';
}

// Función para cerrar el segundo modal y abrir el tercero
function closeModal4() {
  document.getElementById('modal-banner-4').style.display = 'none';
 //document.getElementById('modal-banner-4').style.display = 'block';
}

function closeModal5() {
 document.getElementById('modal-banner-5').style.display = 'none';
 document.getElementById('modal-banner-6').style.display = 'block';
}


// Función para cerrar el tercer modal
function closeModal6() {
  document.getElementById('modal-banner-6').style.display = 'none';
  document.getElementById('modal-banner-4').style.display = 'block';

}
/*

// Función para cerrar el tercer modal
function closeModal4() {
  document.getElementById('modal-banner-4').style.display = 'none';
}
*/