import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={service.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.description}</p>
        <p className="text-xl font-bold">Price: ${service.price}</p>
        <Link to='/service' type="submit" className="btn btn-outline">Buy Now</Link>
      </div>
    </div>
  );
};

export default Service;
