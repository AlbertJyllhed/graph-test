# Chart Examples

A React application showcasing interactive data visualizations using Chart.js, Recharts, and MUI X Charts, with client-side routing and responsive design.

## Features

- Bar chart built with Chart.js displaying daily passage data
- Equivalent chart implementations in Recharts and MUI X Charts
- Responsive layout — switches to a horizontal bar chart on mobile screens
- Client-side navigation with React Router

## Tech Stack

- **React** — UI framework
- **React Router** — client-side routing
- **Chart.js** + **react-chartjs-2** — primary data visualization
- **Recharts** — second alternative chart implementation
- **MUI X Charts** — third alternative chart implementation

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation bar with router links
│   ├── ChartJsExample.jsx  # Chart.js bar chart component
│   ├── RechartsExample.jsx # Recharts bar chart component
│   └── MuiExample.jsx      # MUI X bar chart component
├── App.jsx                 # Root component with routing and shared state
└── App.css                 # Global styles
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

```bash
npm install
```

### Running the app

```bash
npm run dev
```

## Usage

Navigate between views using the links in the header:

- **Chart.js** — displays a bar chart of passages per day for the current month
- **MUI** — displays a MUI-based bar chart component
- **Recharts** — displays a Recharts-based bar chart component

The chart automatically switches between vertical (desktop) and horizontal (mobile) layout based on a `768px` breakpoint.

## Responsive Design

Mobile detection is handled once in `App.jsx` using `window.matchMedia` and passed down to each chart as an `isMobile` prop:

```js
const mediaQuery = window.matchMedia("(max-width: 768px)");
const [isMobile, setIsMobile] = useState(mediaQuery.matches);
```

Using `matchMedia` instead of a `resize` event listener ensures the correct layout is applied on the initial render and works reliably with browser DevTools responsive mode.

## Chart Configuration

All three chart implementations share the same behaviour:

- **Responsive axis** — vertical on desktop, horizontal on mobile
- **No background grid** — grid lines hidden on both axes
- **Custom title** — displayed above the chart
- **Fixed height** — 400px container

### Implementation notes

| | Chart.js | Recharts | MUI X Charts |
|---|---|---|---|
| Data format | Separate labels + data arrays | Array of objects | Separate axis data + series |
| Responsive sizing | `maintainAspectRatio: false` + div height | `ResponsiveContainer` wrapper | Fixed `width` and `height` props |
| Horizontal layout | `indexAxis: "y"` | `layout="horizontal"` + swapped axis types | `layout="horizontal"` + swapped axis scale types |
