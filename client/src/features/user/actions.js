import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userActions = {
  //  get: createAsyncThunk("users/getuser", async () => {
  //       try {
  //         let response = await axios.get("/user");

  //         return await response;
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }),
  register: createAsyncThunk("users/postuser", async (user) => {
    try {
      let response = await axios.post("/user/register", user);

      return await response;
    } catch (error) {
      console.log(error);
    }
  }),
  // delete: createAsyncThunk(
  //   "users/deleteusers",
  //   async (id) => {
  //     try {
  //       return await axios.delete(`user/${id}`);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // ),
  put: createAsyncThunk("user/updateuser", async ({ id, edited }) => {
    try {
      const response = await axios.put(`/user/${id}`, edited);

      return response;
    } catch (error) {
      console.log(error);
    }
  }),
  putteam: createAsyncThunk("user/updateteam", async ({id, team}) => {
    try {
      const response = await axios.put(`/user/${id}`, team);
      console.log(id);

      return response;
    } catch (error) {
      console.log(error);
    }
  }),

  login: createAsyncThunk("users/loginuser", async (user) => {
    try {
      let response = await axios.post("/user/login", user);

      return await response;
    } catch (error) {
      console.log(error);
    }
  }),

  current: createAsyncThunk("users/current", async () => {
    const options = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      let response = await axios.get("/user/current", options);
      return await response;
    } catch (error) {
      console.log(error);
    }
  }),
};
