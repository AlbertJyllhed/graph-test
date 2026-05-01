import { BarChart } from "@mui/x-charts";

function MuiChartExample({ data, days, isMobile }) {
    return (
        <div className="container">
            <BarChart
                layout={isMobile ? "horizontal" : "vertical"}
                xAxis={
                    isMobile
                        ? [{ scaleType: "linear" }]
                        : [{ scaleType: "band", data: days }]
                }
                yAxis={
                    isMobile
                        ? [{ scaleType: "band", data: days }]
                        : [{ scaleType: "linear" }]
                }
                series={[
                    {
                        data: data.data,
                        label: data.label,
                        color: "rgb(94, 180, 206)",
                    },
                ]}
                grid={{ horizontal: false, vertical: false }}
            />
        </div>
    );
}

export default MuiChartExample;
