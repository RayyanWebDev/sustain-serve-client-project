import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import { Link } from "react-router-dom";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  //   useEffect(() => {
  //     fetch("./../../../assets/food.json")
  //       .then((res) => res.json())
  //       .then((data) => setFoods(data));
  //   }, []);
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto mb-14 mt-14">
        <div className="grid justify-center">
          <div>
            {" "}
            <span className="text-3xl font-bold  ">Featured Foods</span>{" "}
          </div>
          {/* <Link to="/available">
            <button className="btn but bg-teal-900 text-base text-white">
              Show All
            </button>
          </Link> */}
        </div>

        <div className="grid grid-cols-3">
          {/* {foods.map((food) => (
            <Food key={food.id} food={food}>
              {" "}
            </Food>
          ))} */}
          {foods.length}
        </div>
      </div>
    </div>
  );
};

export default Foods;
