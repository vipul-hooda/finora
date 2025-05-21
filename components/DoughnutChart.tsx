"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
	const data = {
		labels: ["Bank1", "Bank2", "Bank3"],
		datasets: [
			{
				label: "Banks",
				data: [1250, 2500, 3750],
				backgroundColor: ["#0747B6", "#2265D8", "#2f91FA"],
				hoverOffset: 4,
			},
		],
	};
	return (
		<Doughnut
			data={data}
			options={{
				cutout: "70%",
				responsive: true,
			}}
		/>
	);
};

export default DoughnutChart;
