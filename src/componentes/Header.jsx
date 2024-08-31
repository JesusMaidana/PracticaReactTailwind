import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.svg";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-2 mt-4 mx-2.5">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <NavBar />
    </header>
  );
};
