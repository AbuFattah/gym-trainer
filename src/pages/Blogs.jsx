import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ minHeight: "calc(100vh - 108px)", lineHeight: "36px" }}
      className="container mx-auto  px-8 text-xl  max-w-[750px] "
    >
      <button className="btn btn-ghost my-5" onClick={() => navigate("/")}>
        Go Home
      </button>
      <div className="my-10">
        <h1 className="font-semibold text-4xl my-8">
          Difference between authorization and authentication?
        </h1>
        <ul>
          <li>
            ⇛ Authorization is a process which determines the level of access a
            user has to certain files and application
          </li>
          <li>
            ⇛ Authentication is a process which identifies and verifies a user.
          </li>
        </ul>
      </div>

      <div className="my-20">
        <p className="font-semibold text-4xl my-8">
          Why firebase? What are the firebase authentication alternatives?
        </p>

        <p>
          Firebase makes it very easy to create authentication system by hiding
          all of the complex implementation details from user.
        </p>
        <p>
          Firebase provides us modular way to write code which improves
          performance of a website.
        </p>

        <p>
          Supabase is a new alternative of firebase for authentication. It
          provides even simpler code than firebase. We can also use node js
          blended with passport js for authentication also.
        </p>
      </div>

      <div className="my-20">
        <p className="font-semibold text-4xl my-8">
          What other services does firebase provide other than authentication?
        </p>

        <p>
          Firebase is considered as a Backend-as-a-Service (BaaS) which allows
          users to connect a full fledged backend with minimal code.
        </p>
        <p>
          Services that firebase offers, include:
          <span className="font-semibold block">
            ⇛ Authentication, Hosting, Realtime Database, Firestore Database,
            Cloud Functions, Cloud Messaging, Cloud Storage, and Firebase ML.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
