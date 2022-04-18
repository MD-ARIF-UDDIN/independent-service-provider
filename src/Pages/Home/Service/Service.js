import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();
  const navigateToServiceDetails = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <h4>Price: {price}</h4>
      <p className="describe">{description}</p>
      <button
        onClick={() => navigateToServiceDetails(id)}
        className="checkout-btn btn btn-dark"
      >
        Book
      </button>
    </div>
  );
};

export default Service;
