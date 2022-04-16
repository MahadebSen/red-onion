import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Breakfast from "../Foods/Breakfast/Breakfast";

const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <img src="https://i.ibb.co/6WHdHmk/background-cropped.png" alt="" />
        <div className="text-center w-[50%] absolute top-[33%] left-[25%] right-[33%]">
          <h1 className="text-3xl font-medium mb-4">
            Best food waiting for your belly
          </h1>
          <div className="relative md:mx-14 lg:mx-[120px] xl:mx-[210px]">
            <input
              className=" w-full rounded-full border-2 px-3 py-1"
              type="text"
            />
            <button className="absolute right-0 rounded-full border-2 px-4 py-1 bg-red-500 text-white">
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center m-12">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mx-6 font-medium text-red-500 underline underline-offset-4"
                : "mx-6 font-medium"
            }
            to="breakfast"
          >
            Breakfast
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mx-6 font-medium text-red-500 underline underline-offset-4"
                : "mx-6 font-medium"
            }
            to="lunch"
          >
            Lunch
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mx-6 font-medium text-red-500 underline underline-offset-4"
                : "mx-6 font-medium"
            }
            to="dinner"
          >
            Dinner
          </NavLink>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
