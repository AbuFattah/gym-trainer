import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto  px-8 text-lg">
      <div className="my-5">
        <h1 className="font-bold text-2xl my-2">
          Difference between authorization and authentication?
        </h1>
        <ul className="list-disc pl-5">
          <li>
            Authorization is a process which determines the level of access a
            user has to certain files and application
          </li>
          <li>
            Authentication is a process which identifies and verifies a user.
          </li>
        </ul>
      </div>

      <div className="my-5">
        <p className="font-bold text-2xl my-2">
          Why are you using firebase? What other options do you have to
          implement authentication?
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
          blended with passport js for authentication.
        </p>
      </div>

      <div className="my-5">
        <p className="font-bold text-2xl my-2">
          What other services does firebase provide other than authentication?
        </p>

        <p>
          Firebase is considered as a Backend-as-a-Service (BaaS) which allows
          users to connect a full fledged backend with minimal code. Services
          that firebase offers, include:
          <ul className="list-disc placeholder-red-50">
            <li>Authentication</li>
            <li>Hosting</li>
            <li>Realtime Database</li>
            <li>Firestore Database</li>
            <li>Cloud Functions</li>
            <li>Cloud Messaging</li>
            <li>Cloud Storage</li>
            <li>Firebase ML</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
