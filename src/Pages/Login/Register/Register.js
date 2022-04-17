import React from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const navigateLogin = (event) => {
    navigate("/login");
  };

  if (user) {
    navigate("/");
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="register-form mt-5">
      <h2 className="text-center">Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your name" />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
        />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account?
        <Link
          to="/login"
          className="text-danger pe-auto"
          onClick={navigateLogin}
        >
          Please login
        </Link>
      </p>
    </div>
  );
};

export default Register;
