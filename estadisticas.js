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
                  { label: '2023', data: [27, 40, 35, 40, 8, 40, 21], backgroundColor: 'rgba(54, 162, 235, 0.6)' },
                  { label: '2024', data: [23, 38, 24, 40, 16, 33, 16], backgroundColor: 'rgba(75, 192, 192, 0.6)' },
                  { label: '2025', data: [24, 25, 24, 30, 17, 24, 24], backgroundColor: 'rgba(255, 99, 132, 0.6)' }
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
                labels: ['Asistencia Administrativa', 'Contabilidad (Diurno)', 'Contabilidad (Nocturno)', 
                         'Diseño y Programación Web (Diurno)', 'Diseño y Programación Web (Nocturno)', 
                         'Enfermería Técnica (Diurno)', 'Guía Oficial de Turismo (Nocturno)', 
                         'Laboratorio Clínico y Anatomía Patológica (Diurno)', 
                         'Técnica en Laboratorio Clínico (Diurno)', 'Relaciones Públicas y Marketing (Nocturno)', 
                         'Marketing (Nocturno)'],
                datasets: [
                  {
                    label: '2023', data: [48, 104, 89, 56, 21, 111, 22, 66, 31, 37, 21], backgroundColor: 'rgba(54, 162, 235, 0.6)'
                  },
                  {
                    label: '2024', data: [61, 108, 88, 74, 20, 109, 30, 90, 0, 0, 44], backgroundColor: 'rgba(75, 192, 192, 0.6)'
                  },
                  {
                    label: '2025', data: [56, 92, 73, 62, 10, 107, 37, 86, 0, 0, 24], backgroundColor: 'rgba(255, 99, 132, 0.6)'
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
                labels: ['Asistencia Administrativa', 'Contabilidad', 'Computación e Informática', 'Diseño y Programación Web', 
                         'Enfermería Técnica', 'Guía Oficial de Turismo', 'Laboratorio Clínico y Anatomía Patológica', 
                         'Técnica en Laboratorio Clínico', 'Secretariado Ejecutivo', 'Relaciones Públicas y Marketing'],
                datasets: [
                  { label: '2022', data: [0, 39, 20, 0, 56, 4, 0, 27, 19, 4], backgroundColor: 'rgba(54, 162, 235, 0.6)' },
                  { label: '2023', data: [0, 36, 24, 0, 51, 6, 0, 14, 13, 9], backgroundColor: 'rgba(75, 192, 192, 0.6)' },
                  { label: '2024', data: [2, 32, 21, 6, 49, 6, 2, 27, 17, 13], backgroundColor: 'rgba(255, 99, 132, 0.6)' }
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
