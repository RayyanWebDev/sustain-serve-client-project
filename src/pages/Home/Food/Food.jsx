import React from "react";
import { Link } from "react-router-dom";

const Food = ({ food }) => {
  //   const {
  //     id,
  //     foodImage,
  //     foodName,
  //     donatorImage,
  //     donatorName,
  //     foodQuantity,
  //     pickupLocation,
  //     expiredDate,
  //     additionalNotes,
  //   } = food;
  return (
    <div>
      <div className=" ">
        <div className="card w-96 bg-base-100 shadow-xl mb-14 bg-transparent">
          <figure className="px-10 pt-10">
            <img src={foodImage} alt="Shoes" className="rounded-xl" />
          </figure>
          {/*  */}

          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
              <span className="text-xs"> {donatorImage} </span>
            </div>
          </div>
          <p> {donatorName} </p>
          {/*  */}
          <div className="card-body items-center text-center">
            <h2 className="card-title"> {foodName} </h2>
            <p className="text-lg font-semibold">{foodQuantity} </p>
            <p> {pickupLocation} </p>
            <p> {expiredDate} </p>
            <p> {additionalNotes} </p>
            <div className="card-actions">
              <Link to={`/service/${id}`}>
                <button className="btn but bg-red-400 ">Details</button>
              </Link>

              <Link to="/available">
                <button className="btn but bg-red-400 ">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
