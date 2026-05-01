import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChartJsExample from "./components/ChartJsExample";
import MuiExample from "./components/MuiExample";
import Header from "./components/Header";
import "./App.css";

function App() {
    const [monthDays, setMonthDays] = useState(() => getDaysInMonth(4, 2026));
    const passages = {
        label: "Passages",
        data: monthDays.map(() => Math.floor(Math.random() * 100)),
    };

    /**
     * @param {int} The month number, 0 based
     * @param {int} The year, not zero based, required to account for leap years
     * @return {Date[]} List with date objects for each day of the month
     */
    function getDaysInMonth(month, year) {
        var date = new Date(year, month, 1);
        var days = [];
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
    }

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ChartJsExample data={passages} days={monthDays} />
                        }
                    />
                    <Route
                        path="/mui"
                        element={
                            <MuiExample data={passages} days={monthDays} />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
