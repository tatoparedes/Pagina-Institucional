document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');
  let ingresantesRendered = false;
  let matriculadosRendered = false;
  let egresadosRendered = false;

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
      // Cerrar todos los acordeones excepto el actual
      accordionItems.forEach(i => {
        if (i !== item) {
          i.classList.remove('active');
          i.querySelector('.accordion-content').style.maxHeight = null;
        }
      });

      const isActive = item.classList.toggle('active');
      content.style.maxHeight = isActive ? content.scrollHeight + 'px' : null;

      if (isActive) {
        const title = header.textContent.trim().toUpperCase();

        if (title.includes('INGRESANTES') && !ingresantesRendered) {
          const ctx = document.getElementById('ingresantesChart')?.getContext('2d');
          if (ctx) {
            new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['Asistencia Administrativa', 'Contabilidad', 'Diseño y Programación Web', 'Enfermería Técnica', 'Guía Oficial de Turismo', 'Laboratorio Clínico y Anatomía Patológica', 'Marketing'],
                datasets: [
                  { label: '2023', data: [27, 77, 45, 40, 8, 40, 21], backgroundColor: 'rgba(54, 162, 235, 0.6)' },
                  { label: '2024', data: [23, 73, 34, 40, 16, 33, 16], backgroundColor: 'rgba(75, 192, 192, 0.6)' },
                  { label: '2025', data: [24, 49, 40, 30, 17, 24, 24], backgroundColor: 'rgba(255, 99, 132, 0.6)' }
                ]
              },
              options: {
                responsive: true,
                scales: { y: { beginAtZero: true } }
              }
            });
            ingresantesRendered = true;
          }
        }

        if (title.includes('MATRICULADOS') && !matriculadosRendered) {
          const ctx = document.getElementById('matriculadosChart')?.getContext('2d');
          if (ctx) {
            new Chart(ctx, {
              type: 'bar',
              data: {
                labels: [
                  'Secretariado Ejecutivo / Asistencia Administrativa',
                  'Contabilidad',
                  'Computación e Informática / Diseño y Programación Web',
                  'Enfermería Técnica',
                  'Guía Oficial de Turismo',
                  'Técnica en Laboratorio Clínico / Laboratorio Clínico y Anatomía Patológica',
                  'Relaciones Públicas y Marketing / Marketing'
                ],
                datasets: [
                  {
                    label: '2023',
                    data: [136, 377, 177, 216, 42, 178, 111], // Datos 2023
                    backgroundColor: 'rgba(54, 162, 235, 0.6)'
                  },
                  {
                    label: '2024',
                    data: [119, 376, 174, 214, 59, 177, 85], // Datos 2024
                    backgroundColor: 'rgba(75, 192, 192, 0.6)'
                  },
                  {
                    label: '2025',
                    data: [56, 165, 86, 107, 37, 86, 45], // Datos 2025
                    backgroundColor: 'rgba(255, 99, 132, 0.6)'
                  }
                ]
              },
              options: {
                responsive: true,
                scales: { y: { beginAtZero: true } }
              }
            });
            matriculadosRendered = true;
          }
        }

        if (title.includes('EGRESADOS') && !egresadosRendered) {
          const ctx = document.getElementById('egresadosChart')?.getContext('2d');
          if (ctx) {
            new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['Secretariado Ejecutivo / Asistencia Administrativa', 'Contabilidad', 'Computación e Informática / Diseño y Programación Web', 
                         'Enfermería Técnica', 'Guía Oficial de Turismo', 'Técnica en Laboratorio Clínico / Laboratorio Clínico y Anatomía Patológica', 
                         'Relaciones Públicas y Marketing'],
                datasets: [
                  { label: '2022', data: [19, 39, 20, 56, 4, 27, 4], backgroundColor: 'rgba(54, 162, 235, 0.6)' },
                  { label: '2023', data: [13, 36, 24, 51, 6, 14, 9], backgroundColor: 'rgba(75, 192, 192, 0.6)' },
                  { label: '2024', data: [19, 32, 27, 49, 6, 29, 13], backgroundColor: 'rgba(255, 99, 132, 0.6)' }
                ]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true } }
              }
            });
            egresadosRendered = true;
          }
        }
      }
    });
  });
});
