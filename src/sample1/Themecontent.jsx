import { useState,createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}){
                    const [isDarkmode,setIsDarkmode] = useState(true);
                    
                    const toggleTheme=()=>{
                        setIsDarkmode(!isDarkmode);
                    };
                


return(
    <Themecontext.Provider value={{isDarkmode,toggleTheme}}>{children}  </Themecontext.Provider>
 );
    }

