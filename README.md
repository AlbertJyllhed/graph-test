# Chart Examples

A React application showcasing interactive data visualizations using Chart.js and MUI, with client-side routing and responsive design.

## Features

- Bar chart built with Chart.js displaying daily passage data
- Client-side navigation with React Router
- MUI date picker component for month-based day selection

## Tech Stack

- **React** — UI framework
- **React Router** — client-side routing
- **Chart.js** + **react-chartjs-2** — data visualization
- **MUI (Material UI)** — UI component library

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation bar with router links
│   ├── ChartJsExample.jsx  # Bar chart component
│   └── MuiExample.jsx      # MUI date picker component
├── App.jsx                 # Root component with routing setup
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

Navigate between the two views using the links in the header:

- **Chart.js** — displays a bar chart of passages per day for the current month
- **MUI** — displays a MUI-based calendar component

## Chart Configuration

The Chart.js bar chart includes the following customizations:

- **No background grid** — clean look with grid lines hidden on both axes
- **Custom title** — displayed above the chart using the Chart.js Title plugin
- **Fixed container height** — set via a wrapping `div` with `maintainAspectRatio: false`
