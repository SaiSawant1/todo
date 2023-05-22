import React from "react";

const TodoItem = ({todo,status}) => {
  return (
    <div className="w-[100%] flex items-center h-[64px] border-b-[1px] py-[22px] px-[20px]">
      <div className="circle mr-[22px]"></div>
      {todo}
    </div>
  );
};

export default TodoItem;
