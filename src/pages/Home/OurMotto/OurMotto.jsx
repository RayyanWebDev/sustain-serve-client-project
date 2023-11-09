import React from "react";

const OurMotto = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-our-motto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/4mLSN7c/pexels-african-recipe-tv-18856628.jpg"
            className="max-w-sm rounded-lg shadow-2xl w-96"
          />
          <div>
            <h1 className="text-4xl font-bold  text-teal-900">
              Be a part of the solution, <br /> stop food wastage revolution.
            </h1>

            <p className="py-6">
              We are dedicated to reducing food waste and providing nutrition to
              those in need. Our website <br /> promotes the safe donation of
              surplus food to food banks and anti-hunger organizations, <br />
              ensuring that it reaches those who require it. By collaborating
              with industry-led initiatives like <br /> the Food Waste Reduction{" "}
              <br /> Alliance and national nonprofit organizations such as
              ReFED, we aim to address the root causes <br />
              of food waste, minimize its generation, and sustainably manage it.
              Our platform also provides <br />
              information on legal, safety, and tax aspects of food donation,
              making it easier for individuals <br /> and businesses to
              contribute to this important cause.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMotto;
