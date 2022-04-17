import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 as HamIcon } from "react-icons/hi";
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="text-black sticky w-full top-0 z-20 bg-white">
        <div className="container py-5 px-10 mx-auto flex  gap-10  justify-between items-center">
          <Link to="/" className="text-3xl font-semibold">
            <span className="text-secondary font-bold">A</span>Trains
          </Link>

          <nav
            className={`${
              show ? "absolute" : "hidden"
            } md:block top-0 left-0 w-full md:w-auto h-fit text-center bg-white  py-5`}
          >
            <CloseIcon
              onClick={() => setShow((prevState) => !prevState)}
              className="absolute md:hidden right-10 top-10 text-3xl cursor-pointer text-secondary"
            />
            <ul className="flex flex-col md:flex-row gap-10 text-xl text-secondary">
              <li></li>
              <li>
                <Link to="services">Services</Link>
              </li>
              <li>
                <Link to="Contact">Contact</Link>
              </li>
              <li>
                <Link to="About">About</Link>
              </li>
              <li>
                <Link to="Blogs">Blogs</Link>
              </li>
              <li>
                <button className="inline md:hidden btn btn-info text-white btn-md rounded-full">
                  Register
                </button>
              </li>
            </ul>
          </nav>
          <button className="btn btn-info text-white btn-md rounded-full">
            Register
          </button>
          <HamIcon
            onClick={() => setShow((prevState) => !prevState)}
            className="block md:hidden text-3xl hover:text-secondary ease-in cursor-pointer"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
