import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import { styled } from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useRef } from "react";
import { PData, PercentBox, PercentZone, Ptitle } from "./MyDataComponent";

ChartJS.register(ArcElement, Tooltip, Legend);

const Main = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  margin-left: 2rem;
`;

export function MyDoughnutChart({ myCategory }) {
  myCategory.sort((a, b) => b.benefitData - a.benefitData);
  const topCategories = myCategory.slice(0, 6);

  const createGradient = (color) => {
    const ctx = document.createElement("canvas").getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "transparent");
    return gradient;
  };

  const initialColors = [
    "#0A0047",
    "#415FFF",
    "#D1ECFF",
    "#E233FF",
    "#00FFB2",
    "#B0B0B0",
  ];

  const chartData = {
    labels: topCategories.map((category) => category.benefitName),
    datasets: [
      {
        data: topCategories.map((category) => category.benefitData),
        backgroundColor: initialColors.map((color) => createGradient(color)),
        // borderColor: initialColors,
      },
    ],
  };

  const Options = {
    plugins: {
      legend: {
        labels: {
          font: {
            family: "youandi", // Replace with your desired font family
          },
        },
      },
    },
  };

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && chartRef.current.chartInstance) {
      const chartInstance = chartRef.current.chartInstance;
      const gradients = chartData.datasets[0].backgroundColor;
      gradients.forEach((gradient, index) => {
        chartInstance.data.datasets[0].backgroundColor[index] = gradient;
      });
      chartInstance.update();
    }
  }, [chartData]);

  return (
    <>
      <Main>
        <Doughnut ref={chartRef} data={chartData} options={Options}></Doughnut>
      </Main>

      <PercentZone>
        {topCategories.map((category, index) => (
          <PercentBox key={index}>
            <Ptitle>{category.benefitName}</Ptitle>

            <PData>
              {new Intl.NumberFormat().format(category.benefitData)}
            </PData>
          </PercentBox>
        ))}
      </PercentZone>
    </>
  );
}
