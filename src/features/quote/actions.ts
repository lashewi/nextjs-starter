import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getQuote = createAsyncThunk('kanye/kanyeQuote', async () => {
  const response = await axios.get('https://api.kanye.rest/');

  return response.data;

  //catch errors
});
