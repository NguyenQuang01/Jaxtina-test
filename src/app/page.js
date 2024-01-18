"use client";
import React from "react";
import MapComponent from "@/app/components/MapComponent";
import BoxInfo from "./components/BoxInfo";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ChartComponent from "./components/Charts";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="relative container mx-auto">
        <span>Click on a country to see information about that country</span>
        <BoxInfo />
        <MapComponent />
        <ChartComponent />
      </div>
    </Provider>
  );
}
