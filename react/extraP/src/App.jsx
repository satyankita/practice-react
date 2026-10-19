import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeContext() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : "light" }Mode 
    </button>
  );
}