import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "../features/player/playerSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    Users: userReducer,
    players: playerSlice,
  },
});
