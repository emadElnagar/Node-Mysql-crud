function NavBar() {
  return (
    <nav>
      <ul className="flex justify-evenly">
        <li className="px-5 py-2 capitalize transition ease-in-out delay-300 hover:text-sky-400 cursor-pointer">home</li>
        <li className="px-5 py-2 capitalize transition ease-in-out delay-300 hover:text-sky-400 cursor-pointer">new book</li>
      </ul>
    </nav>
  );
}

export default NavBar;
