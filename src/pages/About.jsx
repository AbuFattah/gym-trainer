import React from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/images/profile-img.png";
const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          background: "rgb(5,7,51)",
          background:
            "linear-gradient(90deg, rgba(5,7,51,1) 0%, rgba(13,53,112,1) 100%)",
        }}
        className="relative h-[150px] flex flex-col justify-center mdjustify-end p-5"
      >
        <button
          className="absolute top-0 left-2 text-white btn btn-ghost"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
        <div className="container mx-auto p-3">
          <h1 className=" text-white text-4xl   md:text-4xl  font-semibold">
            ABOUT ME
          </h1>
        </div>
      </div>

      <div className="container mx-auto p-10">
        <div className="">
          <div className=" p-5 ">
            <img className="w-52" src={profileImg} alt="" />
          </div>
          <div className="pl-5 md:pl-10">
            <h1 className="text-4xl font-semibold leading-relaxed ">Hello!</h1>

            <p className="max-w-[800px] text-lg leading-relaxed">
              I am Abu Fattah from Bangladesh.I have a paission for web
              development. I have graduated from BRAC University with a major in
              Computer Science. I aspire toward a career where I can challenge
              my skills to develop beautiful and engaging software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
