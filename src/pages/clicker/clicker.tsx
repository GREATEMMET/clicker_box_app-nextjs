import React from "react";
import s from "./clicker.module.scss";
import Topbar from "@/Components/Topbar/Topbar";
import BoxContainer from "@/Components/BoxContainer/BoxContainer";

export default function clicker() {
  return (
    <div>
      <Topbar />
      <div
        className={`${s.clickerPage} flex justify-center flex-col items-center bg-black`}
      >
        <h1 className={`text-white text-[40px] mb-[30px] capitalize`}>Click to toggle</h1>
        <BoxContainer />
      </div>
    </div>
  );
}
