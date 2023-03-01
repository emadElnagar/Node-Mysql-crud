import { useState, useEffect  } from "react";
import BookCard from "../components/BookCard";
import axios from "axios";

const HomePage = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/books').then((books) => {
      setList(books.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [list]);
  return (
    <div>
      {
        list.length > 0 ? list.map((book) => (
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
// <BookCard />

export default HomePage;
