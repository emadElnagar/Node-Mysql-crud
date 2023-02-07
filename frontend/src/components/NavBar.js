import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="h-16 shadow-lg">
      <ul className="h-full flex justify-evenly">
        <li className="flex flex-col justify-center font-serif capitalize transition ease-in-out duration-300 hover:text-sky-400 cursor-pointer">
          <Link to={`/`}>home</Link>
        </li>
        <li className="flex flex-col justify-center font-serif capitalize transition ease-in-out duration-300 hover:text-sky-400 cursor-pointer">
        <Link to={`/new`}>new book</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
