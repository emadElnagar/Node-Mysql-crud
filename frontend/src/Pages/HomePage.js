import { useEffect  } from "react";
import BookCard from "../components/BookCard";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBooks } from "../features/BookFeatures";

const HomePage = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllBooks());
  }, [dispatch]);
  return (
    <div>
      {
        books.length > 0 ? books.map((book) => (
          <BookCard key={book.id}  book={book} />
        )) : (
          <div className="h-custom flex justify-center items-center">
            <h1 className="font-serif capitalize text-2xl text-red-600">there is no books yet</h1>
          </div>
        )
      }
    </div>
  )
}

export default HomePage;
