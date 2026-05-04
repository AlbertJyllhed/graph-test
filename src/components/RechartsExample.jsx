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
        ...data.reduce(
            (acc, series) => ({
                ...acc,
                [series.label]: series.data[i],
            }),
            {},
        ),
    }));

    return (
        <div className="container">
            <ResponsiveContainer width="100%">
                <BarChart
                    data={chartData}
                    layout={isMobile ? "vertical" : "horizontal"}
                    margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                >
                    {isMobile ? (
                        <>
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="day" />
                        </>
                    ) : (
                        <>
                            <XAxis dataKey="day" />
                            <YAxis width={30} />
                        </>
                    )}
                    <Tooltip />
                    {data.map((series, index) => (
                        <Bar
                            key={index}
                            dataKey={series.label}
                            name={series.label}
                            fill={series.color}
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RechartsExample;
