import { createSlice } from "@reduxjs/toolkit";
import { userActions } from "./actions";

const initialState = {
  users: [],
  status: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Logout: (state, action) => {
      state.users = null;
      localStorage.removeItem("token");
      localStorage.removeItem("isadmin");
    },
  },
  extraReducers: {
    // [userActions.get.pending]: (state) => {
    //   state.status = "loading";
    // },
    // [userActions.get.fulfilled]: (state, action) => {
    //   state.users = action.payload.data.response;
    //   state.status = "success";
    //   console.log(action);
    // },
    // [userActions.get.rejected]: (state) => {
    //   state.status = "failed";
    // },
    [userActions.register.pending]: (state) => {
      state.status = "loading";
    },
    [userActions.register.fulfilled]: (state) => {
      state.status = "success";
    },
    [userActions.register.rejected]: (state) => {
      state.status = "failed";
    },
    // [userActions.delete.pending]: (state) => {
    //   state.status = "loading";
    // },
    // [userActions.delete.fulfilled]: (state) => {

    //   state.status = "success";

    // },
    // [userActions.delete.rejected]: (state) => {
    //   state.status = "failed";

    // },
    [userActions.put.pending]: (state) => {
      state.status = "loading";
    },
    [userActions.put.fulfilled]: (state) => {
      state.status = "success";
    },
    [userActions.put.rejected]: (state) => {
      state.status = "failed";
    },
    [userActions.putteam.pending]: (state) => {
      state.status = "loading";
    },
    [userActions.putteam.fulfilled]: (state) => {
      state.status = "success";
    },
    [userActions.putteam.rejected]: (state) => {
      state.status = "failed";
    },

    [userActions.login.pending]: (state) => {
      state.status = "loading";
    },
    [userActions.login.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload.data.user;
      localStorage.setItem("token", action.payload.data.token);

      state.isAuth = true;
    },
    [userActions.login.rejected]: (state) => {
      state.status = "failed";
    },

    [userActions.current.pending]: (state) => {
      state.status = "loading";
    },
    [userActions.current.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload.data;
      localStorage.setItem("isadmin", state.users.isAdmin);
    },
    [userActions.current.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { Logout } = userSlice.actions;
export default userSlice.reducer;
