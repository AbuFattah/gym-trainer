import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { HiMenuAlt3 as HamIcon } from "react-icons/hi";
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
const Header = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="text-black sticky w-full top-0 z-20 bg-white">
        <div className="container py-5 px-10 mx-auto flex  gap-10  justify-between items-center">
          <HashLink to="/#" className="text-3xl font-semibold">
            <span className="text-secondary font-bold">A</span>Trains
          </HashLink>

          <nav
            className={` absolute md:static ${
              show ? "top-0" : "top-[-500px]"
            } left-0 w-full md:w-auto h-fit text-center bg-white  py-5 ease-in-out duration-200 font-semibold`}
          >
            <CloseIcon
              onClick={() => setShow((prevState) => !prevState)}
              className="absolute md:hidden right-10 top-10 text-3xl cursor-pointer text-secondary hover:text-black ease-in-out duration-300"
            />
            <ul className="flex flex-col md:flex-row gap-10 text-xl">
              <li>
                <HashLink
                  className={`hover:text-secondary duration-200 ease-in ${
                    location.pathname === "/" ? "text-secondary" : "text-black"
                  }`}
                  to="/#services"
                >
                  Services
                </HashLink>
              </li>
              <li>
                <Link
                  className={`hover:text-secondary duration-200 ease-in ${
                    location.pathname === "/contact"
                      ? "text-secondary"
                      : "text-black"
                  }`}
                  to="contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className={`hover:text-secondary duration-200 ease-in ${
                    location.pathname === "/about"
                      ? "text-secondary "
                      : "text-black"
                  }`}
                  to="about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={` hover:text-secondary duration-200 ease-in ${
                    location.pathname === "/blogs"
                      ? "text-secondary"
                      : "text-black"
                  }`}
                  to="blogs"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <button className="inline md:hidden btn btn-info text-white btn-md rounded">
                  Register
                </button>
              </li>
            </ul>
          </nav>
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="btn btn-primary text-white btn-md rounded-full"
          >
            Register
          </button>
          <HamIcon
            onClick={() => setShow((prevState) => !prevState)}
            className="block md:hidden text-3xl hover:text-secondary cursor-pointer ease-in-out duration-300"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
