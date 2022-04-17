import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="text-black sticky w-full top-0 z-20 bg-white">
        <div className="container py-5 px-10 mx-auto flex flex-col gap-10 md:flex-row justify-between items-center">
          <Link to="/" className="text-3xl font-semibold">
            <span className="text-secondary font-bold">A</span>Trains
          </Link>
          <nav>
            <ul className="flex gap-10 text-xl">
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
            </ul>
          </nav>
          <button className="btn btn-ghost">Register</button>
        </div>
      </header>
    </>
  );
};

export default Header;
