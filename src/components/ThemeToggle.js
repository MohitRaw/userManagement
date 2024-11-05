import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(UserContext);
  return (
    <button
      className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
      onClick={toggleTheme}
    >
      Toggle to {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
