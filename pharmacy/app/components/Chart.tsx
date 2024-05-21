import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  sales: Sale[];
}

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Отчет о продаже лекарств",
    },
  },
};

export const Chart = ({ sales }: Props) => {
  const labels = Array.from(new Set(sales.map((sale) => sale.medicine))); // Получаем уникальные названия медикаментов
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Продажи",
        data: labels.map((label) =>
          sales.filter((sale) => sale.medicine === label).reduce((acc, curr) => acc + curr.count, 0)
        ), // Подсчитываем сумму продаж для каждого медикамента
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "700px" }}>
      <Bar options={options} data={data} />
    </div>
  );
};
