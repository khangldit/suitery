import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController
);

const InvestChart = () => {
  const ramdom = (range) => Math.floor(Math.random() * range);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: '',
      },
      tooltip: {
        displayColors: false,
        backgroundColor: '#ffd741',
        // yAlign: 'bottom',
        callbacks: {
          title: (xDatapoint) => {
            return '';
          },
          label: (yDatapoint) => {
            return yDatapoint.raw;
          },
          labelTextColor: (yDatapoint) => {
            return 'rgb(0,0,0)';
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: labels.map(() => ramdom(1000)),
        backgroundColor: '#ffd741',
        borderRadius: 10,
        maxBarThickness: 20,
      },
    ],

    legend: {
      display: true,
      position: 'top',
      label: {
        backgroundColor: 'red',
      },
    },
    plugins: {
      datalabels: {
        display: false,
      },
    },
  };
  return (
    <div className="investment-chart">
      <Bar className="h-100" options={options} data={data} />
    </div>
  );
};
export default InvestChart;
