import React from "react";
import useDinner from "../../Custom hooks/useDinner/useDinner";
import EachFood from "../EachFood/EachFood";

const Dinner = () => {
  const [dinner, setDinner] = useDinner();
  return (
    <div className="grid grid-cols-3 gap-x-20 gap-y-10 mx-20 my-16">
      {dinner.map((item) => (
        <EachFood key={item.id} item={item}></EachFood>
      ))}
    </div>
  );
};

export default Dinner;
