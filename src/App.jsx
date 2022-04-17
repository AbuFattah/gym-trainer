import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
function App() {
  return (
    <>
      <header>
        <div className="container p-4 mx-auto">
          <p>
            <span>A</span>Trains
          </p>
          <nav>
            <ul>
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
        </div>
      </header>
    </>
  );
}

export default App;
