import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import config from '../config/env'
import Cookies from 'js-cookie'

import axios from 'axios';

const initialState = {
   leaderBoard: [],
   error: '',
   deailEarningCase: false,
   giveRewardCase: false,
  
};


export const fetchLeaderBoard = createAsyncThunk(
  'leaderBoard/fetchLeaderBoard',
   async (userCount , {rejectWithValue}) => {
      try {
        const response = await axios.post(`${config.url}/users/list`);
        return response.data.users;
      } catch(err) {
        rejectWithValue(err);
      }
  }
)

export const deailEarnings = createAsyncThunk(
   'leaderBoard/deailEarnings',
    async (userCount , {rejectWithValue}) => {
      let headers = {
        headers: {
          'Authorization': `Bearer ${JSON.parse(Cookies.get('auth')).token}`
        }
      }
      try {
        const response = await axios.post(`${config.url}/users/daily-earning`, {}, headers);
        return response.data;
      } catch(err) {
        rejectWithValue(err);
      }
    }
);

export const giveRewar = createAsyncThunk(
  'leaderBoard/giveRewar',
    async () => {
      let headers = {
        headers: {
          'Authorization': `Bearer ${JSON.parse(Cookies.get('auth')).token}`
        }
      }

      const response = await axios.post(`${config.url}/pools/give-rewar`, {}, headers);
      return response.data

    }
)

const leaderBoardSlice = createSlice({
  name: 'leaderBoard',
  initialState,
  reducers: {
    changeDeailEarningCase: (state, action) =>  {
      state.deailEarningCase = action.payload;
    },
    changeGiveRewardCase: (state, action) =>  {
      state.giveRewardCase = action.payload;
    }
  },

  extraReducers: (builder) => {
    
    builder.addCase(fetchLeaderBoard.fulfilled, (state, action) => {
       state.leaderBoard = action.payload
    });

    builder.addCase(deailEarnings.fulfilled, (state, action) => {
      if(action.payload?.success === 1) {
        state.deailEarningCase = false
      }
    });


    builder.addCase(giveRewar.fulfilled, (state,action) => {
      if(action.payload?.success === 1) {
        state.giveRewardCase = false
      }
    })

    builder.addCase(fetchLeaderBoard.rejected, (state, action) => {
      state.error = action.payload
  });
  }

});


export const {changeDeailEarningCase,changeGiveRewardCase} = leaderBoardSlice.actions;

export default leaderBoardSlice.reducer;



