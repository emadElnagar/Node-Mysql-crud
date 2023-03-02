import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

const BookCard = (props) => {
  const { book } = props;
  return (
    <div className="shadow-md w-96 min-w-96 m-auto my-14 pt-8 text-center">
      <h1 className="font-serif capitalize text-2xl text-sky-400">{ book.title }</h1>
      <p className="font-serif capitalize text-lg mt-5">by: <span>{ book.author }</span></p>
      <div className="flex justify-between p-8">
        <AiOutlineDelete className="cursor-pointer text-red-600" title="Delete" />
        <FiEdit2 className="cursor-pointer text-violet-600" title="Edit" />
      </div>
    </div>
  )
}

export default BookCard;
