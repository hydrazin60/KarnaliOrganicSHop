import React from "react";
import BarChartComponent from "./Dashbord";
import { Component } from "./HorizentalDashbord";
import { RoundChards } from "./RoundAnalisys";
import { RoundCircle } from "./RoundCircle";

export default function Analisics() {
  return (
    <div>
      <div className="flex w-full justify-between ">
        <BarChartComponent />
        <RoundCircle />
        <RoundChards />
      </div>
      <Component />
    </div>
  );
}
