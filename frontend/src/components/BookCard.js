import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { DeleteBook, UpdateBook } from "../features/BookFeatures";

const BookCard = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
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
        dispatch(DeleteBook({slug}));
        swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    });
  }
  const handleUpdate = (slug) => {
    swal.fire({
      title: 'Update Book',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#54B4D3',
      html: `<input type="text" id="title" class="swal2-input" placeholder="Book Title">
      <input type="text" id="author" class="swal2-input" placeholder="Book Author">`,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        const title = swal.getPopup().querySelector('#title').value;
        const author = swal.getPopup().querySelector('#author').value;
        if (!title || !author) {
          swal.showValidationMessage(`Please fill all fields`)
        }
        return { title, author }
      }
    }).then((result) => {
      const { title, author } = result.value;
      dispatch(UpdateBook({ slug, title, author }));
    });
  }
  return (
    <div className="shadow-md w-96 min-w-96 m-auto my-14 pt-8 text-center dark:bg-dark-bg-card">
      <h1 className="font-serif capitalize text-2xl text-sky-400">{ book.title }</h1>
      <p className="font-serif capitalize text-lg mt-5 dark:text-dark-text">by: <span>{ book.author }</span></p>
      <div className="flex justify-between p-8">
        <AiOutlineDelete className="cursor-pointer text-red-600" title="Delete" onClick={() => handleDelete(book.slug)} />
        <FiEdit2 className="cursor-pointer text-violet-600" title="Edit" onClick={() => handleUpdate(book.slug)} />
      </div>
    </div>
  )
}

export default BookCard;
