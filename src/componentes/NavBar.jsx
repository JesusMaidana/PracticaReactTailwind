import { Link } from 'react-router-dom';
import { useState } from 'react';
import burgerMenu from "../assets/images/icon-menu.svg";
import closeMenuIcon from "../assets/images/icon-menu-close.svg"; // Opcional: icono de cierre

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li>
          <Link to="/"  className="hover:text-SoftRed">Home</Link>
        </li>
        <li>
          <Link to="/video" className="hover:text-SoftRed">Producciones</Link>
        </li>
        <li>
          <Link to="/fotos"  className="hover:text-SoftRed">Fotos</Link>
        </li>
        <li>
          <Link to="/show"  className="hover:text-SoftRed">Shows</Link>
        </li>
        <li>
          <Link to="/contacto"  className="hover:text-SoftRed">Contacto</Link>
        </li>
      </ul>

      <img
        className="w-10 h-4 cursor-pointer sm:hidden"
        src={menuOpen ? closeMenuIcon : burgerMenu}
        alt="Menu hamburguesa"
        onClick={toggleMenu}
      />

      {menuOpen && (
        <ul
          className="flex flex-col text-[18px] sm:hidden bg-DarkGrayishBlue text-white p-4 absolute top-16 right-0 z-50 shadow-lg"
          // Aplicamos z-index alto para que esté por encima de otros elementos
        >
          <li className="mb-4">
            <Link to="/" onClick={toggleMenu}className="hover:text-black">Home</Link>
          </li>
          <li className="mb-4">
            <Link to="/video" onClick={toggleMenu}className="hover:text-black">Producciones</Link>
          </li>
          <li className="mb-4">
            <Link to="/fotos" onClick={toggleMenu}className="hover:text-black">Fotos</Link>
          </li>
          <li className="mb-4">
            <Link to="/show" onClick={toggleMenu}className="hover:text-black">Shows</Link>
          </li>
          <li className="mb-4">
            <Link to="/contacto" onClick={toggleMenu}className="hover:text-black">Contacto</Link>
          </li>
        </ul>
      )}
    </>
  );
};
