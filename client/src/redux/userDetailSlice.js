import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import config from '../config/env'
import axios from 'axios';
import Cookies from 'js-cookie';

const initialState = {
   userData: null,
   error: ''
};


export const fetchUserDetail = createAsyncThunk(
  'userDetail/fetchUserDetail',
   async (userid) => {
    const response = await axios.post(config.url + '/users/user-detail/'+userid);
    return response.data;
 
  }   
)



const userDetailSlice = createSlice({
  name: 'userDetail',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetail.fulfilled, (state, action) => {
       state.userData = action.payload
    });

  }
})

export default userDetailSlice.reducer;