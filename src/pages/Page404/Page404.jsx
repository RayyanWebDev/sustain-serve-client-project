import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto">
        <img
          src="https://i.ibb.co/Tw2Y3BY/download-image-1699344835563.png"
          alt=""
        />
      </div>
      <Link to="/"> Go Back To Home</Link>
    </div>
  );
};

export default Page404;
