import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
