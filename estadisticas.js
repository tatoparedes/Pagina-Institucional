document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');
  let charts = {};

  // Extraer datos de tabla
  function getTableData(table) {
    const rows = table.querySelectorAll('tbody tr:not(:last-child)');
    const data = [];
    const labels = [];
    
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      labels.push(cells[0].textContent.trim());
      const values = [];
      for (let i = 1; i < cells.length; i++) {
        values.push(parseInt(cells[i].textContent.trim()) || 0);
      }
      data.push(values);
    });
    
    return { labels, data };
  }

  // Crear gráfico
  function createChart(canvasId, table) {
    const ctx = document.getElementById(canvasId)?.getContext('2d');
    if (!ctx) return;
    
    const { labels, data } = getTableData(table);
    const headers = Array.from(table.querySelectorAll('thead th')).slice(1).map(th => th.textContent.trim());
    
    const datasets = headers.map((header, index) => ({
      label: header,
      data: data.map(row => row[index]),
      backgroundColor: `rgba(${54 + index * 60}, ${162 - index * 30}, ${235 - index * 50}, 0.6)`
    }));
    
    charts[canvasId] = new Chart(ctx, {
      type: 'bar',
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const table = item.querySelector('table');
    const canvas = item.querySelector('canvas');

    header.addEventListener('click', () => {
      accordionItems.forEach(i => {
        if (i !== item) {
          i.classList.remove('active');
          i.querySelector('.accordion-content').style.maxHeight = null;
        }
      });

      const isActive = item.classList.toggle('active');
      content.style.maxHeight = isActive ? content.scrollHeight + 'px' : null;

      if (isActive && canvas && !charts[canvas.id]) {
        setTimeout(() => createChart(canvas.id, table), 100);
      }
    });
  });
});