import { Home } from "lucide-react";
import { Contact } from "lucide-react";
import { Film, InfoIcon, User } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-8 bg-gray-900 text-white shadow-lg rounded-lg">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold mr-4">
          <Film size={40} className="text-teal-500 mr-2" />
          <span className="text-5xl font-bold"> Cinema Catalog </span>
        </h1>
      </div>
      <div className="flex w-1/2 items-center">
        <ul className="flex justify-around w-full items-center">
          <Link className="flex items-center gap-2" to="/">
            <Home size={30} className="text-teal-500" />
            <p className="text-sm">Home</p>
          </Link>

          <Link className="flex items-center gap-2" to="/about">
            <InfoIcon size={30} className="text-teal-500" />
            <p className="text-sm">About</p>
          </Link>

          <Link className="flex items-center gap-2" to="/flim">
            <User size={30} className="text-teal-500" />
            <p className="text-sm">Flim</p>
          </Link>
          <Link className="flex items-center gap-2" to="/contact">
            <Contact  size={30} className="text-teal-500" />
            <p className="text-sm">Contact</p>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
