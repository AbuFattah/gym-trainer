import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
