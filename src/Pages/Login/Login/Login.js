import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location=useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };
  const navigateRegister = (event) => {
    navigate("/register");
  };

  return (
    <div className="register-form mt-5">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          ref={emailRef}
          name="email"
          id=""
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          ref={passwordRef}
          name="password"
          id=""
          placeholder="password"
          required
        />
        <input type="submit" value="login" />
      </form>
      <p>
        New to lens king?
        <Link
          to="/register"
          className="text-danger pe-auto"
          onClick={navigateRegister}
        >
          Please register
        </Link>
      </p>
    </div>
  );
};

export default Login;
