import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetail.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Checkout = () => {
  const { serviceId } = useParams();
  const submitBook = async () => {
    toast("Thanks for booking");
  };
  return (
    <div className="service-details">
      <div className="contact">
        <h1 className="text-center">Book Services:</h1>
        <form onSubmit={submitBook}>
          <input
            className="input-btn"
            type="text"
            name="name"
            id=""
            placeholder="Your name"
          />
          <input
            className="input-btn"
            type="email"
            name="email"
            id=""
            placeholder="email"
            required
          />
          <input
            className="input-btn"
            type="password"
            name="password"
            id=""
            placeholder="password"
            required
          />
          <input
            className="input-btn"
            type="text"
            name="Phone number"
            id=""
            placeholder="Phone"
          />
        </form>

        <button className="submit-button pe-auto" onClick={submitBook}>
          Submit
        </button>

        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Checkout;
