import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'http://localhost:5000/books';

const initialState = {
  books: [],
  book: null,
  isLoading: false,
  error: null
}

export const NewBook = createAsyncThunk("books/new", async (newBook, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${url}/new`, newBook);
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
  }
});

export const { AddBook } = bookSlice.actions;
export default bookSlice;
