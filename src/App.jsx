import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
function App() {
  return (
    <>
      <div className="banner relative flex items-center justify-center text-white">
        <header className="text-white absolute w-full top-0">
          <div className="container py-5 px-10 mx-auto flex flex-col gap-10 md:flex-row justify-between items-center">
            <p className="text-3xl font-semibold">
              <span className="text-secondary font-bold">A</span>Trains
            </p>
            <nav>
              <ul className="flex gap-10 text-xl">
                <li>
                  <Link to="services">Sevices</Link>
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
    </>
  );
}

export default App;
