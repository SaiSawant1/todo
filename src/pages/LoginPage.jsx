import React, { useRef, useState } from "react";
import loginImg from "../images/loginPage.png";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const userEmail = useRef();
  const userPassword = useRef();
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState('')
  const {login}=useAuth()
  const navigate= useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      login(userEmail.current.value, userPassword.current.value);
      navigate('/')
      
    } catch (error) {
      setError(error.message);
    }
    setLoading(false)
  }

  return (
    <div className="h-[100vh] flex bg-[#2291F2] w-[100vw]">
      <div className=" h-[100vh] w-[50%]">
        <img className="h-[100%] w-[100%]" src={loginImg} alt="background" />
      </div>
      <div className=" h-[100vh] flex flex-col justify-center items-center w-[50%]">
        <form onSubmit={handleSubmit} className="p-6 flex flex-col items-center  justify-evenly bg-[#0C59F2] rounded-md w-[70%] h-[60%]" action="">
          <div className="text-5xl text-center">Hello User</div>
          <div className="text-3xl m-5">Welcome Back</div>
          <p className="text-xl">Please enter your credentials</p>
          <div className="mt-2 w-full flex h-10 items-center p-2 text-lg bg-white rounded-md ">
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
          <div className="mt-2 w-full flex h-10 items-center p-2 text-lg bg-white rounded-md ">
            <FontAwesomeIcon icon={faLock} />
            <input
              required
              ref={userPassword}
              className="ml-2 grow"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <button disabled={loading} type="submit"  className="mt-5 w-full bg-[#0C59F2] border-2 rounded-md  hover:bg-[#BBDDF2] hover:text-[#0F47F2] text-white">Login</button>
        </form>
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default LoginPage;
