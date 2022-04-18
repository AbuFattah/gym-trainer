import React from "react";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
const ConnectWithMe = () => {
  return (
    <div className="bg-slate-200 shadow">
      <div className="container mx-auto p-10">
        <h1 className="text-center text-4xl  mb-5 text-lightBlue">
          CONNECT WITH ME
        </h1>
        <p
          style={{
            background: "rgb(2,0,36)",
            background: "linear-gradient(to right, #ccc,#999,#ccc)",
          }}
          className="w-[150px] h-[1px] bg-slate-500 mx-auto mt-5"
        ></p>
        <div className="socail-container flex flex-wrap justify-evenly items-center p-10 gap-10">
          <a href="https://www.facebook.com/" target="blank">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://www.twitter.com/">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithMe;
