import { BarChart } from "@mui/x-charts/BarChart";

function MuiExample({ data, days }) {
    return (
        <div className="container">
            <BarChart
                xAxis={[
                    {
                        id: "barDays",
                        data: days,
                        height: 28,
                    },
                ]}
                series={[
                    {
                        data: data.data,
                        label: data.label,
                        color: "var(--primary)",
                    },
                ]}
            />
        </div>
    );
}

export default MuiExample;
