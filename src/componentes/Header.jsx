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
    <header className="flex items-center justify-between mb-2 mt-4 mx-2.5">
      {/* Logo de Shukran */}
      <Link to="/" className="flex-shrink-0">
        <img
          src={darkMode ? logoDark : logoLight}
          alt="LogoShukran"
          className="w-24 h-auto"
        />
      </Link>

      {/* Menú hamburguesa (visible solo en mobile) */}
      <div className="flex-grow flex justify-center sm:hidden">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-md"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* NavBar para pantallas sm+ */}
      <div className="sm:flex sm:flex-grow sm:justify-center">
        <NavBar darkMode={darkMode} />
      </div>

      {/* Botón para cambiar de modo en pantallas sm+ */}
      <div className="hidden sm:block">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-md"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};
