import React from "react";
import themeMoon from "../images/icon-moon.svg";
export const Todo = () => {
  return (
    <div className="w-[540px]">
      <div className="flex justify-between items-center">
        <div className="text-4xl text-center tracking-[10px] text-white flex items-center justify-center">
          Todo
        </div>
        <div>
          <img src={themeMoon} alt="" srcset="" />
        </div>
      </div>
      <div>
        <form action="">
          <input
            className="w-[100%] mt px-8 mt-[50px] text-[18px] h-[62px] rounded-lg"
            type="text"
            placeholder="Create a new Todo.."
          />
        </form>
      </div>
      <div className="h-max-[388px] rounded-md w-[100%] mt-[22px] bg-white shadow-2xl overflow-y-hidden ">
        <div className="w-[100%] flex items-center h-[64px] border-b-[1px] py-[22px] px-[20px]">
            <div className="circle mr-[22px]"></div>
            Buy cars
        </div>
      </div>
      <div className="w-[100%]  flex justify-between items-center bg-white h-[64px] border-b-[1px] py-[22px] px-[20px]">
        <div className="mr-8">
            5 items completed
        </div>
        <div className="flex-grow flex justify-evenly">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
        <div className="ml-8">
            <button>Clear Completed</button>
        </div>
        </div>
    </div>
  );
};
