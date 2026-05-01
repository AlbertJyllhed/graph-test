import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

function ChartJsExample({ data, days }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const options = {
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
        datasets: [
            {
                label: data.label,
                data: data.data,
                backgroundColor: "rgb(94, 180, 206)",
                barPercentage: 1,
            },
        ],
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
