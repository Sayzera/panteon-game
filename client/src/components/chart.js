import React from 'react'
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

function Chart({dailyEarnings}) {


 const options = {
   
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Last 5 Days Earning',
    },
  },
};

  const labels = dailyEarnings?.map((item) => {
    return item.date
  });
  const number = dailyEarnings?.map((item) => {
    return item.amount
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Daily Earning',
        data: labels?.map((data , index) => number[index]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <Line options={options} data={data} />
  )
}

export default Chart