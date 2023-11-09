import { data } from "autoprefixer";
import React from "react";

const AddFood = () => {
  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const donatorName = form.donatorName.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDate = form.expiredDate.value;
    const aditionalNotes = form.aditionalNotes.value;

    const newFoods = {
      foodName,
      foodImage,
      donatorName,
      foodQuantity,
      pickupLocation,
      expiredDate,
      aditionalNotes,
    };
    console.log(newFoods);

    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFoods),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="form">
      <form onSubmit={handleAddFood}>
        <div className="flex max-w-screen-2xl mx-auto justify-center">
          <div className="form-control mr-10">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">
              <input
                name="foodName"
                type="text"
                placeholder="Food Name"
                className="input input-bordered w-96"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Donator Name</span>
            </label>
            <label className="input-group">
              <input
                name="donatorName"
                type="text"
                placeholder="Donator Name"
                className="input input-bordered w-96"
              />
            </label>
          </div>
        </div>
        {/* .......... */}
        <div className="flex max-w-screen-2xl mx-auto justify-center">
          <div className="form-control mr-10">
            <label className="label">
              <span className="label-text">Food Quantity</span>
            </label>
            <label className="input-group">
              <input
                name="foodQuantity"
                type="text"
                placeholder="Food Quantity"
                className="input input-bordered w-96"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Pickup Location</span>
            </label>
            <label className="input-group">
              <input
                name="pickupLocation"
                type="text"
                placeholder="Pickup Location"
                className="input input-bordered w-96"
              />
            </label>
          </div>
        </div>
        {/* ......... */}
        <div className="flex max-w-screen-2xl mx-auto justify-center">
          <div className="form-control mr-10">
            <label className="label">
              <span className="label-text">Expired Date</span>
            </label>
            <label className="input-group">
              <input
                name="expiredDate"
                type="text"
                placeholder="Expired Date"
                className="input input-bordered w-96"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Aditional Notes</span>
            </label>
            <label className="input-group">
              <input
                name="aditionalNotes"
                type="text"
                placeholder="Aditional Notes"
                className="input input-bordered w-96"
              />
            </label>
          </div>
        </div>
        {/* .... */}
        <div className="flex max-w-screen-2xl mx-auto justify-center">
          <div className="form-control mr-10">
            <label className="label">
              <span className="label-text">Food Image</span>
            </label>
            <label className="input-group">
              <input
                name="foodImage"
                type="text"
                placeholder="FoodImage URL"
                className="input input-bordered w-96"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center mt-9">
          <input
            type="submit"
            value="Add Product"
            className="btn btn-block   max-w-screen-2xl mx-auto w-80"
          />
        </div>
      </form>
    </div>
  );
};

export default AddFood;
