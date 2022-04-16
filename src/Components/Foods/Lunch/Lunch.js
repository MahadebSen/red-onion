import React from "react";
import useLunch from "../../Custom hooks/useLunch/useLunch";

import EachFood from "../EachFood/EachFood";

const Lunch = () => {
  const [lunch, setLunch] = useLunch();
  return (
    <div className="grid grid-cols-3 gap-x-20 gap-y-10 mx-20 my-16">
      {lunch.map((item) => (
        <EachFood key={item.id} item={item}></EachFood>
      ))}
    </div>
  );
};

export default Lunch;
