import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Fragment, useState } from "react";
import SearchForm from "./SearchForm";

function NavBar({ mode }) {
  const [modeVal, setModeVal] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const handleModeToggle = (modeVal) => {
    if (modeVal === true) {
      mode(false);
      setModeVal(false);
    } else {
      mode(true);
      setModeVal(true);
    }
  }
  const handleSeach = () => {
    if (isSearch === true) {
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }
  }
  return (
    <Fragment>
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
            <AiOutlineSearch onClick={() => handleSeach()} />
          </li>
          <li className="
            flex flex-col justify-center font-serif capitalize 
            transition ease-in-out duration-300 
            cursor-pointer dark:text-dark-text"
          >
            {
              modeVal === true
              ? (
                <BsFillSunFill onClick={() => handleModeToggle(modeVal)} />
              ) : (
                <BsFillMoonFill onClick={() => handleModeToggle(modeVal)} />
              )
            }
          </li>
        </ul>
      </nav>
      {
        isSearch && (<SearchForm />)
      }
    </Fragment>
  );
}

export default NavBar;
