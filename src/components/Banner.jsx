import React, { useEffect } from "react";
import Header from "./Header";

const Banner = () => {
  useEffect(() => {
    console.log("yo banner");
  }, []);
  return (
    <div className="banner flex items-center justify-center text-white px-5">
      <div className="text-center space-y-12">
        <h1 className="text-5xl md:text-8xl font-bold italic leading-normal">
          PERSONAL TRAINING
        </h1>
        <p className="text-4xl text-accent">
          Premium online personal training with Andrew Adams.
        </p>
        <button className="btn btn-accent">START HERE</button>
      </div>
    </div>
  );
};

export default Banner;
