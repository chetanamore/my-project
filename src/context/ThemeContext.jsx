import { createContext, useContext, useState } from "react";

// Create ThemeContext
const ThemeContext = createContext();

// Create ThemeProvider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook to use ThemeContext
export function useTheme() {
  return useContext(ThemeContext);
}


