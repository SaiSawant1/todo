import React from "react";
import checked from "../images/icon-check.svg"
import { useDispatch } from "react-redux";
import {statusChange} from "../store/slice/TodoSlice"
const TodoItem = ({ todo, status ,id}) => {
  const [isChecked, setChecked] = React.useState(status);
  const dispatch=useDispatch()
  const handleCheck = () => {
    setChecked(!isChecked);
    dispatch(statusChange(id))
  };

  return (
    <div
      className={`w-[100%] ${
        isChecked ? "line-through text-gray-400" : ""
      }  flex items-center h-[64px] border-b-[1px] py-[22px] px-[20px]`}
    >
      <div onClick={handleCheck} className={`circle flex justify-center items-center mr-[22px] ${isChecked&&'back-ground-gradient'}`}>
        {isChecked && <img className="object-fill flex justify-center items-center " src={checked} alt="" />}
      </div>
      {todo}
    </div>
  );
};

export default TodoItem;
