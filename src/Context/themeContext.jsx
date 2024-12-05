import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeToggleProvider({ children }) {
    const [dark, setDark] = useState(false);

  
    function toggle() {
        setDark(prevDark => !prevDark);
    }

    return (
        <ThemeContext.Provider value={{ dark, setDark, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;
