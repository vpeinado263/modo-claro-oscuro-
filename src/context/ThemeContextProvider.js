import { createContext, useState } from "react"

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(false)
    
//para que funcione de la otra forma colocamos una e entre parentesis()

    const handleTheme = () => { 
        /*queremos acctualizar el estado dependiendo de que input del formulario estemos clickenado*/

        /*sugerencia de cambiar ek  estado en toggle teme*/

        // if ( e.target.value === "light") {
        //     setTheme("ligth")
        // } else {
        //     setTheme("dark")
        // }


        setTheme(!theme)
    }
    const toggleTheme = theme ? "dark" : "light"


    const data = [toggleTheme, handleTheme]
  
    return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;

