import React from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, upadteError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const navigateLogin = (event) => {
    navigate("/login");
  };
  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate("/");
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    //console.log('Updated profile');
  };
  return (
    <div className="re-form mt-5">
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
        <input
          className="w-50 mx-auto register-btn"
          type="submit"
          value="Register"
        />
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

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
