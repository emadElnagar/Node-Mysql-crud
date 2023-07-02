import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'http://localhost:5000/books';

const initialState = {
  books: [],
  book: null,
  isLoading: false,
  error: null
}

// Create new book
export const NewBook = createAsyncThunk("books/new", async (newBook, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${url}/new`, newBook);
    return response.data;
  } catch (error) {    
    return rejectWithValue(error.message);
  }
});

// Update book
export const UpdateBook = createAsyncThunk("book/update", async (book, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${url}/update/${book.slug}`, {
      title: book.title,
      author: book.author
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    AddBook: (state, action) => {
      state.books.push({
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author
      })
    }
  },
  extraReducers: (builder) => {
    builder
      // Add New Book extra reducers
      .addCase(NewBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(NewBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(action.payload);
      })
      .addCase(NewBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      // Update book extra reducers
      .addCase(UpdateBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateBook.fulfilled, (state, action) => {
        state.isLoading = false;
        const {
          arg: { slug },
        } = action.meta;
        if (slug) {
          state.books = state.books.map((item) =>
            item.slug === slug ? action.payload : item
          );
          state.tours = state.tours.map((item) =>
            item.slug === slug ? action.payload : item
          );
        }
      })
      .addCase(UpdateBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
  }
});

export default bookSlice.reducer;
