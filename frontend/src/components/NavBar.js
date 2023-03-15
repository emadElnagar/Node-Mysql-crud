import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";

function NavBar() {
  return (
    <nav className="h-16 shadow-lg flex">
      <ul className="w-10/12 h-full flex justify-evenly">
        <li className="
          flex flex-col justify-center font-serif capitalize 
          transition ease-in-out duration-300 
          hover:text-sky-400 cursor-pointer 
          dark:text-dark-text dark:hover:text-sky-400"
        >
          <Link to={`/`}>home</Link>
        </li>
        <li className="
        flex flex-col justify-center font-serif capitalize 
        transition ease-in-out duration-300 
        hover:text-sky-400 cursor-pointer 
        dark:text-dark-text dark:hover:text-sky-400"
        >
        <Link to={`/new`}>new book</Link>
        </li>
      </ul>
      <ul className="h-full w-2/12 flex justify-evenly">
        <li className="
          flex flex-col justify-center font-serif capitalize 
          transition ease-in-out duration-300 
          hover:text-sky-400 cursor-pointer 
          dark:text-dark-text dark:hover:text-sky-400"
        >
          <AiOutlineSearch />
        </li>
        <li className="
          flex flex-col justify-center font-serif capitalize 
          transition ease-in-out duration-300 
          cursor-pointer dark:text-dark-text"
        >
          <BsFillSunFill />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
