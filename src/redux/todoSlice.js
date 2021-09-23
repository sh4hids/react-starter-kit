/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import qs from 'query-string';

import { apiUrl } from '../config';

const initialState = {
  tasks: {
    status: 'idle',
    list: [],
  },
  task: {
    status: 'idle',
    details: {},
  },
};

export const getTodosAsync = createAsyncThunk(
  'movies/getTodosAsync',
  async (queries = {}) => {
    const response = await axios.get(
      `${apiUrl}/todos?${qs.stringify(queries)}`
    );
    return response.data;
  }
);

export const getTodoByIdAsync = createAsyncThunk(
  'movies/getTodoByIdAsync',
  async (id) => {
    const response = await axios.get(`${apiUrl}/todos/${id}`);
    return response.data;
  }
);

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodosAsync.pending, (state) => {
        state.tasks.status = 'loading';
      })
      .addCase(getTodosAsync.fulfilled, (state, action) => {
        state.tasks.status = 'idle';
        state.tasks.todos = action.payload.data;
      });
    builder
      .addCase(getTodoByIdAsync.pending, (state) => {
        state.task.status = 'loading';
      })
      .addCase(getTodoByIdAsync.fulfilled, (state, action) => {
        state.task.status = 'idle';
        state.task.details = action.payload.data;
      });
  },
});

export const { addTodo, toggleComplete, deleteTodo } = movieSlice.actions;

export default movieSlice.reducer;
