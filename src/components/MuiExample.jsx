import { BarChart } from "@mui/x-charts";

function MuiChartExample({ data, days, isMobile }) {
    return (
        <div className="container graph-container">
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
                        : [{ scaleType: "linear", width: 30 }]
                }
                series={data.map((series) => ({
                    data: series.data,
                    label: series.label,
                    color: series.color,
                }))}
                grid={{ horizontal: false, vertical: false }}
                margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            />
        </div>
    );
}

export default MuiChartExample;
