import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewBook } from '../features/BookFeatures';
import { useDispatch } from 'react-redux';

const FormPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    dispatch(NewBook({id, title, author})).then(navigate('/'));
  }
  return (
    <div className="w-9/12 m-auto my-14 uppercase">
      <h1 className="font-serif font-bold text-3xl text-center dark:text-dark-text">create new book</h1>
      <form className="mt-5" onSubmit={handleSubmit}>
        <input type="text" placeholder="Book title" className="w-full mt-4 px-5 py-2 border border-solid border-1 border-sky-400 focus:outline-none dark:bg-dark-bg-dark dark:input-dark" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Book author" className="w-full mt-4 px-5 py-2 border border-solid border-1 border-sky-400 focus:outline-none dark:bg-dark-bg-dark dark:input-dark" onChange={(e) => setAuthor(e.target.value)} required />
        <input
          type="submit"
          value="submit"
          className="
            mt-4 bg-sky-400 text-white cursor-pointer transition ease-in-out duration-300 px-5 py-2 capitalize
            border border-solid border-1 border-sky-400
            hover:bg-white hover:text-sky-400
            dark:hover:bg-dark-bg
          "
        />
      </form>
    </div>
  )
}

export default FormPage;
