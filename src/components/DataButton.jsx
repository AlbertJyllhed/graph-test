import React from "react";

function DataButton({ visibleCount, onCountChanged }) {
    return (
        <div className="container">
            {[1, 2, 3].map((count) => (
                <button
                    key={count}
                    onClick={() => onCountChanged(count)}
                    style={{
                        fontWeight: visibleCount === count ? "bold" : "normal",
                    }}
                >
                    {count} dataset{count > 1 ? "s" : ""}
                </button>
            ))}
        </div>
    );
}

export default DataButton;
