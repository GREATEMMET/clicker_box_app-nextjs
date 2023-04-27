import React from "react";
import Box from "../Box/Box";
import boxes from "../../dataBase/boxes";
import s from "./BoxContainer.module.scss";

export default function BoxContainer() {
  const [box, setBox] = React.useState(boxes.data.boxes);

  function boxClicker(id: number) {
    setBox((prevBox) =>
      prevBox.map((b) =>
        id === b.id ? { ...b, isFilled: !b.isFilled } : { ...b }
      )
    );
  }

  const boxMapped = box.map((b) => (
    <Box key={b.id} id={b.id} isFilled={b.isFilled} boxClicker={boxClicker} />
  ));

  return <div className={`${s.boxContainer}`}>{boxMapped}</div>;
}
