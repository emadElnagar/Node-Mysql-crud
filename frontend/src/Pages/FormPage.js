const FormPage = () => {
  return (
    <div className="w-9/12 m-auto my-14">
      <h1 className="font-serif font-bold text-4xl text-center">create new book</h1>
      <form className="mt-5">
        <input type="text" placeholder="book title" className="w-full mt-4 px-5 py-2 border border-solid border-1 border-sky-400 focus:outline-none" />
        <input type="text" placeholder="book author" className="w-full mt-4 px-5 py-2 border border-solid border-1 border-sky-400 focus:outline-none" />
        <input
          type="submit"
          value="submit"
          className="
            mt-4 bg-sky-400 text-white cursor-pointer transition ease-in-out duration-300 px-5 py-2 capitalize
            border border-solid border-1 border-sky-400
            hover:bg-white hover:text-sky-400
          "
        />
      </form>
    </div>
  )
}

export default FormPage;
