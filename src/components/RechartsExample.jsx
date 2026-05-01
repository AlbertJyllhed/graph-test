import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Text,
    ResponsiveContainer,
} from "recharts";

function RechartsExample({ data, days, isMobile }) {
    // Recharts expects an array of objects, one per bar
    const chartData = days.map((day, i) => ({
        day,
        value: data.data[i],
    }));

    return (
        <div className="container">
            <p style={{ textAlign: "center" }}>{data.label}</p>
            <ResponsiveContainer width="100%">
                <BarChart
                    data={chartData}
                    layout={isMobile ? "vertical" : "horizontal"}
                >
                    {isMobile ? (
                        <>
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="day" />
                        </>
                    ) : (
                        <>
                            <XAxis dataKey="day" />
                            <YAxis />
                        </>
                    )}
                    <Tooltip />
                    <Bar
                        dataKey="value"
                        name={data.label}
                        fill="rgb(94, 180, 206)"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RechartsExample;
