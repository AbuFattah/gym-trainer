import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl uppercase text-center my-10">Services</h1>
      <p className="text-center text-lg max-w-[900px] mx-auto mb-6">
        I offer a comprehensive service which goes above and beyond to get you
        in the ​best shape of your life and feeling great, whether you're a
        complete beginner, or have hit a plateau.​
      </p>

      <div className="flex justify-center flex-wrap">
        {services.map((service) => (
          <Service
            name={service.name}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
