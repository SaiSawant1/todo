import React, { useRef } from "react";
import loginImg from "../images/loginPage.png";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LoginPage = () => {
  const userEmail = useRef();
  const userPassword = useRef();
  return (
    <div className="h-[100vh] flex bg-[#2291F2] w-[100vw]">
      <div className=" h-[100vh] w-[50%]">
        <img className="h-[100%] w-[100%]" src={loginImg} alt="background" />
      </div>
      <div className=" h-[100vh] flex flex-col justify-center items-center w-[50%]">
        <form className="p-6 flex flex-col items-center  justify-evenly bg-[#0C59F2] rounded-md w-[70%] h-[60%]" action="">
          <div className="text-5xl text-center">Hello User</div>
          <div className="text-3xl m-5">Welcome Back</div>
          <p className="text-xl">Please enter your credentials</p>
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
          <button  className="mt-5 w-full bg-[#0C59F2] border-2 rounded-md  hover:bg-[#BBDDF2] hover:text-[#0F47F2] text-white">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
