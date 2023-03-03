import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import swal from 'sweetalert2';

const BookCard = (props) => {
  const { book } = props;
  const handleDelete = (slug) => {
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/books/delete/${slug}`);
        swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    });
  }
  return (
    <div className="shadow-md w-96 min-w-96 m-auto my-14 pt-8 text-center">
      <h1 className="font-serif capitalize text-2xl text-sky-400">{ book.title }</h1>
      <p className="font-serif capitalize text-lg mt-5">by: <span>{ book.author }</span></p>
      <div className="flex justify-between p-8">
        <AiOutlineDelete className="cursor-pointer text-red-600" title="Delete" onClick={() => handleDelete(book.slug)} />
        <FiEdit2 className="cursor-pointer text-violet-600" title="Edit" />
      </div>
    </div>
  )
}

export default BookCard;
