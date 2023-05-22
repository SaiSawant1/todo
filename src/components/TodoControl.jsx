import React from 'react'

const TodoControl = () => {
  return (
    <div className="w-[100%]  text-gray-400 flex justify-between items-center bg-white h-[64px] border-b-[1px] py-[22px] px-[20px]">
        <div className="mr-8">5 items completed</div>
        <div className="flex-grow flex justify-evenly">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <div className="ml-8">
          <button>Clear Completed</button>
        </div>
      </div>
  )
}

export default TodoControl