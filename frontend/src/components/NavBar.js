import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className="flex justify-evenly">
        <li className="px-5 py-2 capitalize transition ease-in-out delay-300 hover:text-sky-400 cursor-pointer">
          <Link to={`/`}>home</Link>
        </li>
        <li className="px-5 py-2 capitalize transition ease-in-out delay-300 hover:text-sky-400 cursor-pointer">
        <Link to={`/new`}>new book</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
