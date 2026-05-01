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
                localeText={{ loading: "Loading data..." }}
                series={[
                    {
                        data: data.data,
                        label: data.label,
                        color: "var(--primary)",
                    },
                ]}
                height={400}
            />
        </div>
    );
}

export default MuiExample;
