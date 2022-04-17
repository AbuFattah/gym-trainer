import React from "react";
import Header from "./Header";

const Banner = () => {
  return (
    <div className="banner relative flex items-center justify-center text-white">
      <div className="text-center space-y-12">
        <h1 className="hidden md:block text-5xl md:text-8xl font-bold italic">
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
