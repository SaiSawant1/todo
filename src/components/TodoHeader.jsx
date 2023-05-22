import React from 'react'
import themeMoon from "../images/icon-moon.svg";
const TodoHeader = () => {
  return (
    <div className="flex justify-between items-center">
        <div className="text-4xl text-center tracking-[10px] text-white flex items-center justify-center">
          Todo
        </div>
        <div>
          <img src={themeMoon} alt="" srcset="" />
        </div>
      </div>
  )
}

export default TodoHeader