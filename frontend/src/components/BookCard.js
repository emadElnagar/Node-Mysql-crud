const BookCard = (props) => {
  const { book } = props;
  return (
    <div className="shadow-md w-96 min-w-96 m-auto my-14 py-10 text-center">
      <h1 className="font-serif capitalize text-2xl text-sky-400">{ book.title }</h1>
      <p className="font-serif capitalize text-lg mt-5">by: <span>{ book.author }</span></p>
    </div>
  )
}

export default BookCard;
