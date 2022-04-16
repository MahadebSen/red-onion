import React from "react";

const EachFood = ({ item }) => {
  const { name, brief, price, image } = item;
  return (
    <div className="p-3">
      <div className=" p-3 text-center rounded-md transition ease-in-out delay-70 hover:-translate-1 hover:scale-110 duration-300 hover:shadow-lg">
        <img className="p-2" src={image} alt="" />
        <p className="font-medium">{name}</p>
        <p className="text-slate-500 text-sm">{brief}</p>
        <p className="font-semibold text-lg">${price}</p>
      </div>
    </div>
  );
};

export default EachFood;
