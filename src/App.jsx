import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import Loading from "./components/Loading";
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="checkout/:productName"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="/notfound" element={<NotFound />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
