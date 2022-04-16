import React from "react";
import useBreakfast from "../../Custom hooks/useBreakfast/useBreakfast";
import EachFood from "../EachFood/EachFood";

const Breakfast = () => {
  const [breakfast, setBreakfast] = useBreakfast();
  return (
    <div className="grid grid-cols-3 gap-x-20 gap-y-10 mx-20 my-16">
      {breakfast.map((item) => (
        <EachFood key={item.id} item={item}></EachFood>
      ))}
    </div>
  );
};

export default Breakfast;
