import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";

const TodoControl = ({ setFilterStatus, filterStatus }) => {
  const TodoList = useSelector((state) => state.todo);
  const checked = TodoList.filter((todo) => todo.status);
  const { width } = useTheme();

  const handleFilter = (filter) => {
    setFilterStatus(filter);
  };

  const DeskTopControl = (
    <div className="w-[100%] shadow-2xl text-gray-400 flex justify-between items-center dark:bg-blue-950 dark:text-gray-50 bg-white h-[64px] rounded-md py-[22px] px-[20px]">
      <div className="mr-8">{checked.length} items completed</div>
      <div className="flex-grow flex justify-evenly">
        <button
          className={filterStatus === "All" ? "Active" : ""}
          onClick={() => handleFilter("All")}
        >
          All
        </button>
        <button
          className={filterStatus === "Active" ? "Active" : ""}
          onClick={() => handleFilter("Active")}
        >
          Active
        </button>
        <button
          className={filterStatus === "Completed" ? "Active" : ""}
          onClick={() => handleFilter("Completed")}
        >
          Completed
        </button>
      </div>
      <div className="ml-8">
        <button>Clear Completed</button>
      </div>
    </div>
  );
    const mobileControl=  <div className=" shadow-2xl rounded-md">
    <div className="w-[100%] shadow-2xl text-sm text-gray-400 flex justify-between items-center dark:bg-blue-950 dark:text-gray-50 bg-white h-[64px] rounded-md py-[22px] px-[20px]">
      <div className="mr-8">{checked.length} items completed</div>
      <button>Clear Completed</button>
    </div>

    <div className="flex-grow flex w-[100%] mt-[22px] text-sm text-gray-400 bg-white h-[64px] rounded-md dark:bg-blue-950 justify-evenly">
      <button
        className={filterStatus === "All" ? "Active" : ""}
        onClick={() => handleFilter("All")}
      >
        All
      </button>
      <button
        className={filterStatus === "Active" ? "Active" : ""}
        onClick={() => handleFilter("Active")}
      >
        Active
      </button>
      <button
        className={filterStatus === "Completed" ? "Active" : ""}
        onClick={() => handleFilter("Completed")}
      >
        Completed
      </button>
    </div>
  </div>
  return ( <>
  {width>454 ? DeskTopControl : mobileControl}
  </> );
};

export default TodoControl;
