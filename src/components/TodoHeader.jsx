import React from 'react'
import themeMoon from "../images/icon-moon.svg";
import themeLight from "../images/icon-sun.svg";
import { useTheme } from '../context/ThemeContext';
const TodoHeader = () => {

  const {theme,setTheme}=useTheme()
  const handleTheme=()=>{
    setTheme(theme==="dark"?"light":"dark")
  }

  return (
    <div className="flex justify-between items-center">
        <div className="text-4xl text-center tracking-[10px] text-white flex items-center justify-center">
          Todo
        </div>
        <div onClick={handleTheme}>
          <img src={(theme==="dark")?themeMoon:themeLight} alt="" srcset="" />
        </div>
      </div>
  )
}

export default TodoHeader