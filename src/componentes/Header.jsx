import { Link } from "react-router-dom";
import logoLight from "../assets/images/logoshukran.svg"; // Logo claro
import logoDark from "../assets/images/logoshukran-blanco.svg"; // Logo oscuro
import { NavBar } from "./NavBar";
import { useState, useEffect } from "react";

export const Header = () => {
  // Estado para el dark mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || false
  );

  // Efecto para cambiar la clase del body cuando cambia el dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Añade clase dark al <html>
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark"); // Remueve clase dark del <html>
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Función para alternar el dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="flex place-content-between items-center mb-2 mt-4 mx-2.5">
      <Link to="/">
        <img
          src={darkMode ? logoDark : logoLight}
          alt="Logo"
          className="w-24 h-auto" // Ajusta el tamaño aquí
        />
      </Link>
      <NavBar />
      <button
        onClick={toggleDarkMode}
        className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-md"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};
