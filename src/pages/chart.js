import { Chart } from "chart.js";

(async function () {
  const data = {
    labels: [
      'Strategy 1',
      'Strategy 2',
      'Strategy 3',
      'Strategy 4'
    ],
    datasets: [{
      label: 'My First Dataset',
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

  // const elementToInject = document.getElementById('pieChart');

  // if (!!elementToInject) {
  //   new Chart(
  //     elementToInject,
  //     {
  //       type: 'pie',
  //       data: data
  //     }
  //   );
  // }


})();