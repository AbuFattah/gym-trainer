import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ name, description, image, price }) => {
  const navigate = useNavigate();
  return (
    <div className="card compact w-[300px] bg-base-100 shadow-xl m-10">
      <figure>
        <img
          className="w-full h-[200px] object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body compact">
        <h2 className="card-title">{name}</h2>
        <p className="text-slate-500">{description}</p>
        <p className="text-lg text-secondary font-semibold">Price: ${price}</p>

        <div className="card-actions justify-end">
          <button
            onClick={navigate.bind(null, "/checkout")}
            className="btn btn-primary w-full mt-5"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
