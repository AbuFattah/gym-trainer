import React from "react";
import loadingImg from "../assets/images/svg/loading-img.svg";
const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-primary z-50">
      <img
        style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        className="absolute w-36 h-36"
        src={loadingImg}
        alt=""
      />
    </div>
  );
};

export default Loading;
