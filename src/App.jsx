import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChartJsExample from "./components/ChartJsExample";
import MuiExample from "./components/MuiExample";
import RechartsExample from "./components/RechartsExample";
import Header from "./components/Header";
import DataButton from "./components/DataButton";
import "./App.css";

function App() {
    const [monthDays, setMonthDays] = useState(() => getDaysInMonth(4, 2026));
    const [visibleCount, setVisibleCount] = useState(3);
    const graphData = useMemo(
        () => [
            {
                label: "Passages",
                data: monthDays.map(() => Math.floor(Math.random() * 100)),
                color: "rgb(94, 180, 206)",
            },
            {
                label: "Wind",
                data: monthDays.map(() => Math.floor(Math.random() * 10)),
                color: "rgb(255, 128, 0)",
            },
            {
                label: "Temperature",
                data: monthDays.map(() => Math.floor(Math.random() * 32)),
                color: "rgb(214, 96, 214)",
            },
        ],
        [monthDays],
    );
    const visibleData = graphData.slice(0, visibleCount);

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const [isMobile, setIsMobile] = useState(mediaQuery.matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const handleChange = (e) => setIsMobile(e.matches);

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    /**
     * @param {int} The month number, 0 based
     * @param {int} The year, not zero based, required to account for leap years
     * @return {Date[]} List with date objects for each day of the month
     */
    const getDaysInMonth = (month, year) => {
        const date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days.map((d) =>
            d.toLocaleDateString("sv-SE", {
                weekday: "short",
                day: "numeric",
            }),
        );
    };

    const handleVisibleCount = (count) => {
        setVisibleCount(count);
    };

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ChartJsExample
                                data={visibleData}
                                days={monthDays}
                                isMobile={isMobile}
                            />
                        }
                    />
                    <Route
                        path="/mui"
                        element={
                            <MuiExample
                                data={visibleData}
                                days={monthDays}
                                isMobile={isMobile}
                            />
                        }
                    />
                    <Route
                        path="/recharts"
                        element={
                            <RechartsExample
                                data={visibleData}
                                days={monthDays}
                                isMobile={isMobile}
                            />
                        }
                    />
                </Routes>
                <DataButton
                    visibleCount={visibleCount}
                    onCountChanged={handleVisibleCount}
                />
            </BrowserRouter>
        </>
    );
}

export default App;
