import { faEnvelope, faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import signUpImage from "../images/signUpImage.jpg";

const SignupPage = () => {
  return (
    <div className="signupPage flex justify-between items-center h-[100vh] w-[100vw]">
      <div className="signup-wrapper  flex flex-col h-[100vh] w-[50%] justify-center items-center">
        <form className="signupForm p-6 rounded-md w-[70%] h-[60%] text-center">
          <h1 className="text-5xl m-3" >Sign up</h1>
          <div>
            <h2 className="text-3xl m-2">Hello!</h2>
            <p className="text-xl m-1">Enter Information to create your new account</p>
          </div>
          <div className="mt-3 w-full flex h-10 items-center p-2 text-lg bg-white rounded-md ">
            <FontAwesomeIcon icon={faEnvelope} />
            <input className="ml-2 grow" type="email" placeholder="Enter Email" name="" id="" />
          </div>
          <div className="mt-3 w-full flex h-10 items-center p-2 text-lg bg-white rounded-md ">
            <FontAwesomeIcon  icon={faLock} />
            <input className="ml-2 grow" type="password" placeholder="Enter Password" />
          </div>
          <div className="mt-3 w-full flex h-10 items-center p-2 text-lg bg-white rounded-md ">
            <FontAwesomeIcon  icon={faLock} />
            <input className="ml-2 grow" type="password" placeholder="Confirm Password" />
            <FontAwesomeIcon  icon={faEye} />
          </div>
          <button className="mt-3 rounded-2xl  w-full h-10 text-lg ">Sign up</button>
        </form>
      </div>

      <div className="signupImage h-[100vh] w-[50%]">
        <img className="h-[100%] w-[100%]" src={signUpImage} alt="background" />
      </div>
    </div>
  );
};

export default SignupPage;
