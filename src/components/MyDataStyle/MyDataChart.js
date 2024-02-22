import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { styled } from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useRef, useState } from "react";
import { PData, PercentBox, PercentZone, Ptitle } from "./MyDataComponent";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    labels: {
      font: {
        family: "youandi", // Replace with your desired font family
      },
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};
const labels = ["1일", "15일", "30일"]; //x축 기준

export const data = {
  labels,
  datasets: [
    {
      label: "분류 1", //그래프 분류되는 항목
      data: [1, 2, 3, 4, 5, 6, 7], //실제 그려지는 데이터(Y축 숫자)
      borderColor: "rgb(255, 99, 132)", //그래프 선 color
      backgroundColor: "rgba(255, 99, 132, 0.5)", //마우스 호버시 나타나는 분류네모 표시 bg
    },
    {
      label: "분류 2",
      data: [2, 3, 4, 5, 4, 7, 8],
      borderColor: "rgb(53, 162, 235)", //실제 그려지는 데이터(Y축 숫자)
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const contentInner = styled.div`
  width: 470px;
  height: 297px;
`;

export const contentWrap = styled.div`
  margin-top: 3rem;
`;
export function LineChart({ compareData }) {
  const [first, setFirst] = useState("");
  const [pfirst, setpFirst] = useState("");
  const [middle, setMiddle] = useState("");
  const [pmiddle, setpMiddle] = useState("");
  const [last, setLast] = useState("");
  const [plast, setpLast] = useState("");

  useEffect(() => {
    setFirst(compareData.first);
    setMiddle(compareData.middle);
    setLast(compareData.last);
    setpFirst(compareData.pfirst);
    setpMiddle(compareData.pmiddle);
    setpLast(compareData.plast);
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Last Month", //그래프 분류되는 항목
        data: [pfirst, pmiddle, plast], //실제 그려지는 데이터(Y축 숫자)
        borderColor: "rgb(255, 99, 132)", //그래프 선 color
        backgroundColor: "rgba(255, 99, 132, 0.5)", //마우스 호버시 나타나는 분류네모 표시 bg
      },
      {
        label: "This Month",
        data: [first, middle, last], //실제 그려지는 데이터(Y축 숫자)
        borderColor: "rgb(53, 162, 235)", //실제 그려지는 데이터(Y축 숫자)
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <contentWrap>
      <contentInner>
        <Line options={options} data={data} width="470" height="235" />
      </contentInner>
    </contentWrap>
  );
}

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
    // Update the chart's gradient when the component mounts or data changes
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
            <Ptitle>
              {/* Add your SVG here or customize as needed */}
              {category.benefitName}
            </Ptitle>

            <PData>
              {new Intl.NumberFormat().format(category.benefitData)}
            </PData>
          </PercentBox>
        ))}
      </PercentZone>
    </>
  );
}
