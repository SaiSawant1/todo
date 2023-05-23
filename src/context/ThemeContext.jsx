import React, {  useEffect } from 'react'

const ThemeContext=React.createContext()

export const useTheme=()=>{
    return React.useContext(ThemeContext)
}

export const ThemeContextProvider = ({children}) => {
    const [theme,setTheme]=React.useState("light")
    const [width,setWidth]=React.useState(window.innerWidth)
    
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setWidth(window.innerWidth)
        })
        return ()=>{
            window.removeEventListener("resize",()=>{
                setWidth(window.innerWidth)
            })
        }
    },[width,setWidth])

    useEffect(()=>{
        if(theme==="dark"){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    },[theme])
    const value={
        theme,setTheme,
        width
    }
  return (
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
  )
}

export default ThemeContext