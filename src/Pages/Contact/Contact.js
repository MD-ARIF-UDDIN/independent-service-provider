import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="text-center">Get In touch with me</h1>
      <h1 className="text-center">Contact:</h1>
      <form>
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
          placeholder="Your name"
        />
        <textarea
          type="text"
          className="txtarea"
          placeholder="Your Message..."
        ></textarea>
      </form>
      <a href="" className="submit-button">
        Submit
      </a>
    </div>
  );
};

export default Contact;
