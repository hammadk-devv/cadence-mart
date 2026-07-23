import { useState, useEffect } from 'react';
import ThemeContext from "./ThemeContext";

const ThemeProvider = (props) => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("DarkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("DarkMode", String(dark));
    if (dark) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return <ThemeContext.Provider value={{ dark, setDark }}>{props.children}</ThemeContext.Provider>;
};

export default ThemeProvider;
