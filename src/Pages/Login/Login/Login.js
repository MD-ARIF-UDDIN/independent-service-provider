import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
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
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    }else{
      toast("please enter your email");
    }
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
        <input className="w-50 mx-auto login-btn" type="submit" value="login" />
      </form>
      {errorElement}
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
      <p>
        Forgot your password?
        <button
          className="btn btn-link text-danger pe-auto"
          onClick={resetPassword}
        >
          Reset password
        </button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
