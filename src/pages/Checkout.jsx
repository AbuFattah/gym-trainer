import React, { useRef, useState } from "react";
import { BsTelephoneFill as PhoneIcon } from "react-icons/bs";
import {
  MdEmail as EmailIcon,
  MdLocationPin as LocationIcon,
} from "react-icons/md";

import {
  RiUser4Line as User,
  RiLockPasswordLine as Lock,
} from "react-icons/ri";
import { AiOutlineMail as Email } from "react-icons/ai";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [focus, setFocus] = useState({
    email: false,
    name: false,
    password: false,
    passwordConfirm: false,
  });
  const nameRef = useRef();
  const emailRef = useRef();
  return (
    <div className="bg-accent p-2 py-5 md:p-10">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="checkout-container p-5 md:p-20 rounded-xl text-white bg-primary flex flex-col md:flex-row gap-5 md:gap-10 justify-between">
          <div className="left">
            <h1 className="font-semibold text-2xl ">You've Chosen</h1>
            <p className="text-secondary text-2xl">Strength Training</p>
            <p className=" text-slate-400 my-5 mb-20">
              Fill up the form I will get back to you within 24 hours
            </p>

            <div className="contactDiv flex gap-5 items-center  my-2 p-3 rounded-md w-[250px]">
              <PhoneIcon className="text-secondary text-lg" />
              <p>+880-1678523691</p>
            </div>
            <div className="emailDiv  flex gap-5 my-2 p-3 rounded-md w-[250px] border-2 border-secondary bg-lightBlue">
              <EmailIcon className="text-secondary text-lg" />
              <p>hello@atrains.com</p>
            </div>
            <div className="locationDiv  flex gap-5 my-2 p-3 rounded-md w-[250px]">
              <LocationIcon className="text-secondary text-lg" />
              <p>221, Baker Street, Uk</p>
            </div>
          </div>
          <div className="right">
            <form className="p-5 rounded-lg bg-white text-black lg:w-[400px] max-w-[450px] w-full">
              <div className="form-group">
                <label htmlFor=" name" className="required-field">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    ref={nameRef}
                    name="name"
                    required
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
                <label className="required-field" htmlFor="comment">
                  Comment:
                </label>
                <div className="relative">
                  <textarea
                    name="comment"
                    required
                    className={`h-[100px] outline-none focus:border-secondary border-gray mt-3 block border-2  rounded-md pl-3 py-2 w-full`}
                  />
                </div>
              </div>

              <div className="text-right">
                <button className="btn btn-secondary my-6 w-40 inline">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
