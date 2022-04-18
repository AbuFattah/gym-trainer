import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{ minHeight: "calc(100vh - 370px)" }}
      className=" flex items-center justify-center"
    >
      <div className="max-w-lg mx-auto text-center my-5">
        <h1 className="text-8xl font-bold mb-8">Oops!</h1>
        <p className="text-5xl mb-8">404 - Page Not Found!</p>
        <Link className="btn btn-primary btn-lg" to="/" replace>
          <FaHome className="mr-2" />
          Back To Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;