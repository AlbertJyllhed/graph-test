function DataButton({ visibleCount, onCountChanged }) {
    return (
        <div className="container btn-container">
            {[1, 2, 3].map((count) => (
                <button
                    key={count}
                    onClick={() => onCountChanged(count)}
                    className={`${visibleCount === count ? "btn-active" : ""}`}
                >
                    {count} dataset{count > 1 ? "s" : ""}
                </button>
            ))}
        </div>
    );
}

export default DataButton;
