import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import config from '../config/env';
import axios from 'axios';
import { jwtCheck } from '../helpers';
import Cookies from 'js-cookie';


const auth =jwtCheck(Cookies.get('auth')) ;

const initialState = {
    isLogin: auth,
    userData: null,
}

export const loginCheck = createAsyncThunk(
  'user/loginCheck',
  async ({username,password}) => {

    const response = await axios.post(config.url + '/users/login', {
      username,
      password
    })
    
    return response.data;

  }
)


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeLoginCase : (state,action) => {
      state.isLogin = action.payload
    }
  },
  extraReducers : (builder) => {
    builder.addCase(loginCheck.fulfilled, (state, action) => {
      if(action.payload.success == 1) {
        state.isLogin = true;
      }
      console.log(action.payload)
      state.userData = action.payload;
    });

    
    builder.addCase(loginCheck.rejected, (state,action) => {
      console.log(action)
    })



  }
});


export const { changeLoginCase } = userSlice.actions;

export default userSlice.reducer;