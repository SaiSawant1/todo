import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import signUpImage from "../images/signUpImage.jpg";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignupPage = () => {
  const userEmail = useRef();
  const userPassword = useRef();
  const confirmPassword = useRef();
  const [error, setError] = React.useState("");
  const [isPwdvisible, setPwdvisible] = React.useState(false);
  const {signup}=useAuth()
  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    if (confirmPassword.current.value !== userPassword.current.value) {
      setError("Passwords do not match");
    }
    try {
      signup(userEmail.current.value, userPassword.current.value);
    } catch (error) {
      setError(error.message);
    }
    userEmail.current.value = "";
    userPassword.current.value = "";
    confirmPassword.current.value = "";
  };

  return (
    <div className="signupPage flex justify-between items-center h-[100vh] w-[100vw]">
      <div className="signup-wrapper  flex flex-col h-[100vh] w-[50%] justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="signupForm p-6 rounded-md w-[70%] h-[60%] text-center"
        >
          <h1 className="text-5xl m-3">Sign up</h1>
          <div>
            <h2 className="text-3xl m-2">Hello!</h2>
            <p className="text-xl m-1">
              Enter Information to create your new account
            </p>
          </div>
          <div className="mt-3 w-full flex h-10 items-center p-2 text-lg bg-white rounded-md ">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              required
              ref={userEmail}
              className="ml-2 grow"
              type="email"
              placeholder="Enter Email"
              name=""
              id=""
            />
          </div>
          <div className="mt-3 w-full flex h-10 items-center p-2 text-lg bg-white rounded-md ">
            <FontAwesomeIcon icon={faLock} />
            <input
              required
              ref={userPassword}
              className="ml-2 grow"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="mt-3 w-full flex h-10 items-center p-2 text-lg bg-white rounded-md ">
            <FontAwesomeIcon icon={faLock} />
            <input
              required
              ref={confirmPassword}
              className="ml-2 grow"
              type={isPwdvisible ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <FontAwesomeIcon
              onClick={() => setPwdvisible(!isPwdvisible)}
              icon={isPwdvisible ? faEyeSlash : faEye}
            />
          </div>
          <button
            type="submit"
            className="mt-3 rounded-2xl  w-full h-10 text-lg "
          >
            Sign up
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <p className="m-4">
            do you already have an account? click here to{" "}
            <Link to="/login">login.</Link>
          </p>
        </form>
      </div>

      <div className="signupImage h-[100vh] w-[50%]">
        <img className="h-[100%] w-[100%]" src={signUpImage} alt="background" />
      </div>
    </div>
  );
};

export default SignupPage;
