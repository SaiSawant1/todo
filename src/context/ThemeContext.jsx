import React, {  useEffect } from 'react'

const ThemeContext=React.createContext()

export const useTheme=()=>{
    return React.useContext(ThemeContext)
}

export const ThemeContextProvider = ({children}) => {
    const [theme,setTheme]=React.useState("light")
    
    useEffect(()=>{
        if(theme==="dark"){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    },[theme])
    const value={
        theme,setTheme
    }
  return (
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
  )
}

export default ThemeContext