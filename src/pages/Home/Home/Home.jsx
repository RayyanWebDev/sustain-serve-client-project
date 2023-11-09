import React from "react";
import Slider from "../Slider/Slider";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import OurMotto from "../OurMotto/OurMotto";
import Foods from "../Foods/Foods";

const Home = () => {
  return (
    <>
      <div className="">
        <Slider></Slider>

        <WhatWeDo></WhatWeDo>
        <Foods></Foods>
        <OurMotto></OurMotto>
      </div>
    </>
  );
};

export default Home;
