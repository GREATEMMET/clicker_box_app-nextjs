import React from "react";
import Box from "../Box/Box";
import boxes from "../../dataBase/boxes";

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

  return (
    <div
      className={`border-2 w-[500px] h-[400px] rounded-lg shadow-[2px_2px_50px_rgba(225,225,225,.5)] flex gap-5 justify-center items-center flex-wrap`}
    >
      {boxMapped}
    </div>
  );
}
