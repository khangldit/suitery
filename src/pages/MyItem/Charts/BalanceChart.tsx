import React, { useRef, useEffect, useState } from 'react';
import type { ChartData, ChartArea } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const BalanceChart = () => {
  const chartRef = useRef<ChartJS>(null);
  const labels = [100, 120, 106, 151, 141, 211, 200];

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }
    const data = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels,
          fill: true,
          backgroundColor: createGradient(chart.ctx, chart.chartArea),
        },
      ],
    };
    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        borderColor: '#34C759',
      })),
    };
    setChartData(chartData);
  }, []);

  function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
    const colorStart = '#181818';
    // const colorMid = '#000000';
    const colorEnd = '#34C759';
    if (!ctx) return 'red';
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

    gradient.addColorStop(0, colorStart);
    // gradient.addColorStop(0.5, colorMid);
    gradient.addColorStop(1, colorEnd);

    return gradient;
  }

  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  });
  const chartOption = {
    responsive: true,
    maintainAspectRatio: false,
    bezierCurve: true,
    elements: {
      line: {
        tension: 0.35,
      },
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
          beginAtZero: true,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };
  return (
    <div className="balance-chart">
      <Chart
        ref={chartRef}
        type="line"
        data={chartData}
        options={chartOption}
      />
    </div>
  );
};
export default BalanceChart;
