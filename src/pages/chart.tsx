import { Chart } from "chart.js";

(async function loadChart() {
  const PIE_CHART_DATA = {
    labels: [
      'Strategy 1',
      'Strategy 2',
      'Strategy 3',
      'Strategy 4'
    ],
    datasets: [{
      label: 'lending',
      data: [50, 12.5, 12.5, 25],
      backgroundColor: [
        '#855Cf8',
        '#E289F2',
        '#7879F1',
        '#B085FF'
      ],
      hoverOffset: 4
    }]
  };
  console.log("Making charts")

  new Chart(
    document.getElementById('chart') as HTMLCanvasElement,
    {
      type: "pie",
      data: PIE_CHART_DATA,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: ''
          }
        }
      },
    }
  );
})();