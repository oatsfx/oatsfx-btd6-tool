import React from "react";

const routes = [
  {
    path: "/rounds",
    key: "rounds",
    name: "Rounds",
    component: React.lazy(() => import("pages/Rounds")),
    visible: true,
  },
  {
    path: "/least-cash-calculator",
    key: "lcc",
    name: "Least Cash",
    component: React.lazy(() => import("pages/LeastCashCalculator")),
    visible: false,
  },
  {
    path: "/race-time-calculator",
    key: "rt",
    name: "Race",
    component: React.lazy(() => import("pages/RaceTimeCalculator")),
    visible: true,
  },
  {
    path: "/leaderboard",
    key: "leaderboard",
    name: "Leaderboards",
    component: React.lazy(() => import("pages/Leaderboard")),
    visible: true,
  },
  {
    path: "/playground",
    key: "playground",
    name: "???",
    component: React.lazy(() => import("pages/Playground")),
    visible: false,
  },
];

export default routes;
