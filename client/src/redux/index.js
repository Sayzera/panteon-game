import { configureStore } from '@reduxjs/toolkit';
import leaderBoard from './leaderBoardSlice';
import userDetail from './userDetailSlice';
import userActions from './userSlice'

export const store = configureStore({
  reducer: {
    leaderBoard,
    userDetail,
    userActions
  },
});
