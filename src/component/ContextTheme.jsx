import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

const ConTextTheme = (children) => {
    const [darkTheme, setdarkTheme] = useState(false)

    const ThemeHandler = () => {
        setdarkTheme((prev=>!))
    }
  return (
    <ThemeContext.Provider value={darkTheme,themeHandler}>
       { children }
    </ThemeContext.Provider>
  )
}
export const ContextThemeValue = () => useContext(ThemeContext)
export default ConTextTheme
