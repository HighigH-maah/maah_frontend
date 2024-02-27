import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ContentWrap } from "./MyDataComponent";

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
      text: "지난 달 VS 이번 달 소비",
    },
  },
};
const labels = ["1일", "15일", "30일"]; //x축 기준

export default function MyDataLineChart({ compareData }) {
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
    <ContentWrap>
      <contentInner>
        <Line options={options} data={data} width="470" height="235" />
      </contentInner>
    </ContentWrap>
  );
}
