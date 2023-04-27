import React from "react";
import s from "./Box.module.scss";

export default function Box(props: any) {
  let styles = {
    backgroundColor: props.isFilled ? "#ffffffc9" : "transparent",
  };
  return (
    <div
      className={`${s.box}`}
      style={styles}
      onClick={() => props.boxClicker(props.id)}
    ></div>
  );
}
