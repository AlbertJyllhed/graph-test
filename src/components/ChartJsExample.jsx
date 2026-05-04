import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Title,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Title,
    Legend,
);

function ChartJsExample({ data, days, isMobile }) {
    const options = {
        interaction: {
            mode: "index",
            intersect: false,
        },
        indexAxis: isMobile ? "y" : "x",
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: data.label,
            },
        },
        scales: {
            x: { grid: { display: false } },
            y: { grid: { display: false } },
        },
    };

    const dataset = {
        labels: days,
        datasets: data.map((series) => ({
            label: series.label,
            data: series.data,
            backgroundColor: series.color,
        })),
    };

    return (
        <div className="container">
            <Bar
                key={isMobile ? "horizontal" : "vertical"}
                options={options}
                data={dataset}
            />
        </div>
    );
}

export default ChartJsExample;
