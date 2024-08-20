import { Link } from 'react-router-dom';
import burgerMenu from "../assets/images/icon-menu.svg";

export const NavBar = () => {
  return (
    <>
      <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li>
          <Link to="/video">Videos</Link>
        </li>
        <li>
          <Link to="/fotos">Fotos</Link>
        </li>
        <li>
          <Link to="/show">Shows</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>

      <img className="w-10 h-4 cursor-pointer sm:hidden" src={burgerMenu} alt="Menu hamburguesa"/>
    </>
  );
};
