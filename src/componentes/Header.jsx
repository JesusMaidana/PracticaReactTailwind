import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.svg";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-8">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <NavBar />
    </header>
  );
};
