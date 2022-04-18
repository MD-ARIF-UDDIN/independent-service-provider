import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetail.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Checkout = () => {
  const { serviceId } = useParams();
  const submitBook =() => {
   toast("please enter your email");
  };
  return (
    <div className="contact">
    <h1 className="text-center">Book:</h1>
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
      />
      <input
        className="input-btn"
        type="password"
        name="password"
        id=""
        placeholder="password"
      />
        <input
        className="input-btn"
        type="text"
        name="Phone number"
        id=""
        placeholder="Phone"
      />
    </form>
    <a href="" className="submit-button">
      Submit
    </a>
    <ToastContainer></ToastContainer>
  </div>
 
  );
};

export default Checkout;
