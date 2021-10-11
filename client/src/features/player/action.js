import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const playerActions = {
  updatePlayer: createAsyncThunk("players/updateplayer", async (players) => {
    try {
      let response = await axios.put("/player", players);

      return await response;
    } catch (error) {
      console.log(error);
    }
  }),

  saveall: createAsyncThunk("player/saveall", async (players) => {
    try {
      let response = await axios.post("/player/all", players);
      return response;
    } catch (error) {
      console.log(error);
    }
  }),
};
