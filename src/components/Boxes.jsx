
import React from "react";

function Boxes() {
  const AllBoxes = [
    { id: 1, isNew: 1 },
    { id: 2, isNew: 0 },
    { id: 3, isNew: 0 },
    { id: 4, isNew: 0 },
    { id: 5, isNew: 0 },
    { id: 6, isNew: 0 },
  ];

  return AllBoxes.map((box) =>
    box.isNew === 1 ? (
      <div className="site__box">
        <div className="child"></div>
        {"Usługa " + box.id}
        <br></br>
        {"(nowość)"}
      </div>
    ) : (
      <div className="site__box">{"Usługa " + box.id}</div>
    )
  );
}

export default Boxes;