import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

  const element = document.documentElement;
  console.log(element)

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
        element.classList.add("dark");
        element.classList.add('dark')
    } else {
        element.classList.remove('dark')
        element.classList.remove('dark')
    }
  })



  return (
    <div
      className="flex items-center justify-center transition-all duration-300"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun size={16} className="cursor-pointer  " />
      ) : (
        <Moon size={16} className="cursor-pointer " />
      )}
    </div>
  );
};
