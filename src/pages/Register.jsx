import React, { useRef, useState } from "react";
import googleIcon from "../assets/images/svg/googleIcon.svg";
import {
  RiUser4Line as User,
  RiLockPasswordLine as Lock,
} from "react-icons/ri";
import { AiOutlineMail as Email } from "react-icons/ai";
import { Link } from "react-router-dom";
const Register = () => {
  const [focus, setFocus] = useState({
    email: false,
    name: false,
    password: false,
    passwordConfirm: false,
  });
  const nameRef = useRef();
  const emailRef = useRef();
  return (
    <div className="bg-primary p-10 text-white">
      <h1 className="font-semibold text-4xl text-center my-5">
        Create New Account
      </h1>
      <h1 className=" text-xl text-center my-5">
        Already a member?{" "}
        <Link to="/signin" className="text-secondary">
          Sign In
        </Link>
      </h1>
      <div className="container mx-auto px-4 flex items-center justify-center">
        <form className="p-5 rounded-lg bg-white text-black max-w-[450px] w-full">
          <div className="form-group">
            <label htmlFor=" name">Your Name</label>
            <div className="relative">
              <input
                ref={nameRef}
                name="name"
                onFocus={setFocus.bind(null, { ...focus, name: true })}
                onBlur={setFocus.bind(null, { ...focus, name: false })}
                type="text"
                className={`outline-none mt-3 block border-2 focus:border-secondary border-gray  rounded-md pl-10 py-2 w-full`}
              />
              <User
                className={`absolute left-3 top-3 text-xl ${
                  focus.name ? "text-secondary" : "text-gray"
                }`}
              />
            </div>
          </div>
          <div className="form-group mt-5">
            <label className="required-field" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                required
                name="email"
                ref={emailRef}
                type="email"
                onFocus={setFocus.bind(null, { ...focus, email: true })}
                onBlur={setFocus.bind(null, { ...focus, email: false })}
                className={`outline-none focus:border-secondary border-gray mt-3 block border-2  rounded-md pl-10 py-2 w-full`}
              />
              <Email
                className={`text-secondary absolute left-3 top-3 text-xl ${
                  focus.email ? "text-secondary" : "text-gray"
                }`}
              />
            </div>
          </div>
          <div className="form-group mt-5">
            <label className="required-field" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                required
                ref={emailRef}
                type="password"
                name="password"
                onFocus={setFocus.bind(null, { ...focus, password: true })}
                onBlur={setFocus.bind(null, { ...focus, password: false })}
                className={`outline-none focus:border-secondary border-gray mt-3 block border-2  rounded-md pl-10 py-2 w-full`}
              />
              <Lock
                className={`text-secondary absolute left-3 top-3 text-xl ${
                  focus.password ? "text-secondary" : "text-gray"
                }`}
              />
            </div>
          </div>
          <div className="form-group mt-5">
            <label className="required-field" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="relative">
              <input
                required
                ref={emailRef}
                type="password"
                name="confirmPassword"
                onFocus={setFocus.bind(null, {
                  ...focus,
                  confirmPassword: true,
                })}
                onBlur={setFocus.bind(null, {
                  ...focus,
                  confirmPassword: false,
                })}
                className={`outline-none focus:border-secondary border-gray mt-3 block border-2  rounded-md pl-10 py-2 w-full`}
              />
              <Lock
                className={`text-secondary absolute left-3 top-3 text-xl ${
                  focus.confirmPassword ? "text-secondary" : "text-gray"
                }`}
              />
            </div>
          </div>
          <div className="text-right">
            <button className="btn btn-secondary my-6 w-40 inline">
              Register Now
            </button>
          </div>
        </form>
      </div>
      <div className="flex gap-2 mt-5 items-center justify-center text-slate-400">
        <div className="w-[100px] h-[2px] bg-slate-400"></div>
        <p>OR</p>
        <div className="w-[100px] h-[2px] bg-slate-400"></div>
      </div>
      <p className="text-center my-3 text-slate-400">
        {location.pathname === "/register" ? "Sign Up" : "Sign In"} with
      </p>
      <button className="flex items-center justify-center bg-white p-2 rounded-full mx-auto mt-5">
        <img className="w-8 h-8" src={googleIcon} alt="google" />
      </button>
    </div>
  );
};

export default Register;
