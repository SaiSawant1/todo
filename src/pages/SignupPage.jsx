import { faEnvelope, faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import signUpImage from "../images/signUpImage.jpg";

const SignupPage = () => {
  return (
    <div className="signupPage flex justify-between items-center h-[100vh] w-[100vw]">
      <div className="signup-wrapper flex flex-col h-[100vh] w-[50%] justify-center items-center">
        <div className="signupForm w-[70%] h-[70%] text-center">
          <h1 className="text-5xl m-8" >Sign up</h1>
          <div>
            <h2 className="text-3xl m-2">Hello!</h2>
            <p className="text-xl m-1">Sign in to your account</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="Enter Email" name="" id="" />
          </div>
          <div>
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Enter Password" />
          </div>
          <div>
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Confirm Password" />
            <FontAwesomeIcon icon={faEye} />
          </div>
          <button>Sign up</button>
        </div>
      </div>

      <div className="signupImage h-[100vh] w-[50%]">
        <img className="h-[100%] w-[100%]" src={signUpImage} alt="background" />
      </div>
    </div>
  );
};

export default SignupPage;
