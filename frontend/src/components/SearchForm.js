import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = () => {
  return (
    <form className="flex justify-center h-10 mt-0.5">
      <input type="text" placeholder="Search" className="border w-9/12 focus:outline-none p-1.5  dark:bg-dark-bg-dark dark:input-dark" />
      <AiOutlineSearch className="h-full w-6 cursor-pointer border" />
    </form>
  )
}

export default SearchForm;
