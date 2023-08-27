import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  return (
    <ThemeContext.Provider value={[isDarkTheme, setDarkTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
