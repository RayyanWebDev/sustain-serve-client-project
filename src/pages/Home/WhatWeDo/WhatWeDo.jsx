import React from "react";

const WhatWeDo = () => {
  return (
    <div>
      <div className="grid justify-center mt-5">
        <div className="flex gap-24">
          <div className="texr-s text-2xl font-semibold text-sky-950 ">
            WHAT
          </div>
          <p className="w-52 border-t border-sky-950 my-4"></p>
        </div>
        <div>
          {" "}
          <span className="text-7xl font-bold text-white">WEDO</span>
          <span className="text-7xl font-bold text-teal-900">WE DO</span>
        </div>
        <br />

        <div>
          Our food donation website is dedicated to facilitating the donation of
          surplus food to those in need. <br /> We provide a platform where
          individuals and businesses can offer excess food to local charities
          and <br />
          organizations. Through our website, donors can easily connect with
          recipients to ensure that no food
          <br /> goes to waste. We aim to create a community-driven approach to
          reducing food waste and addressing <br />
          food insecurity by enabling seamless food donations.
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
