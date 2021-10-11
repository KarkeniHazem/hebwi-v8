import { createSlice } from "@reduxjs/toolkit";
import { playerActions } from "./action";

const initialState = {
  plr: [],

  players: [
    {
      name: "Faker",
      realname: "Lee Sang-hyeok",
      role: "MID",
      team: "T1",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/78/T1logo_profile.png",
      price: 8,
      pickRate: "23%",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8c/T1_Faker_2021_Split_2.png",
      assists: 10,
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      deaths: 5,
      kills: 4,
      firstTowerKill: true,
      baronKills: 1,
      firstBloodKill: true,
      win: true,
    },
    {
      name: "ShowMaker",
      realname: "Heo S",
      role: "MID",
      team: "DK",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/DWG_KIAlogo_square.png",
      price: 10,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3b/DK_ShowMaker_2021_Split_2.png",
      assists: 5,
      deaths: 0,
      kills: 10,
      firstTowerKill: false,
      baronKills: 2,
      firstBloodKill: true,
      win: true,
    },
    {
      name: "Chovy",
      realname: "	Jeong Ji-hoon",
      role: "MID",
      team: "HLE",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e9/Hanwha_Life_Esportslogo_profile.png",
      price: 9,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/02/HLE_Chovy_2021_Split_2.png",
      assists: 1,
      deaths: 1,
      kills: 3,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Canna",
      realname: "	Kim Chang-dong",
      role: "TOP",
      team: "T1",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/78/T1logo_profile.png",
      price: 7,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d4/T1_Canna_2021_Split_2.png",
      assists: 10,
      deaths: 5,
      kills: 1,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Khan",
      realname: "	Kim Dong-ha ",
      role: "TOP",
      team: "DK",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/DWG_KIAlogo_square.png",
      price: 7,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/55/DK_Khan_2021_Split_2.png",
      assists: 5,
      deaths: 3,
      kills: 10,
      firstTowerKill: true,
      baronKills: 2,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Morgan",
      realname: "	Kim Dong-ha ",
      role: "TOP",
      team: "HLE",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e9/Hanwha_Life_Esportslogo_profile.png",
      price: 3,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/6b/HLE_Morgan_2021_Split_2.png",
      assists: 3,
      deaths: 7,
      kills: 1,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Oner",
      realname: "	Moon Hyeon-joon ",
      role: "JUNGLE",
      team: "T1",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/78/T1logo_profile.png",
      price: 6,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b8/T1_Oner_2021_Split_2.png",
      assists: 8,
      deaths: 3,
      kills: 5,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Canyon",
      realname: "		Kim Geon-bu ",
      role: "JUNGLE",
      team: "DK",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/DWG_KIAlogo_square.png",
      price: 9,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/30/DK_Canyon_2021_Split_2.png",
      assists: 12,
      deaths: 3,
      kills: 2,
      firstTowerKill: false,
      baronKills: 2,
      firstBloodKill: false,
      win: true,
    },

    {
      name: "Arthur",
      realname: "	Park Mi-reu",
      role: "JUNGLE",
      team: "HLE",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e9/Hanwha_Life_Esportslogo_profile.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c8/HLE_Arthur_2021_Split_2.png",
      assists: 1,
      deaths: 3,
      kills: 2,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Gumayusi",
      realname: "Lee Min-hyeong ",
      role: "ADC",
      team: "T1",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/78/T1logo_profile.png",
      price: 6,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/45/T1_Gumayusi_2021_Split_2.png",
      assists: 3,
      deaths: 2,
      kills: 9,
      firstTowerKill: true,
      baronKills: 1,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Ghost",
      realname: "	Jang Yong-jun ",
      role: "ADC",
      team: "DK",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/DWG_KIAlogo_square.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e0/DK_Ghost_2021_Split_2.png",
      assists: 6,
      deaths: 1,
      kills: 0,
      firstTowerKill: false,
      baronKills: 2,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Deft",
      realname: "Kim Hyuk-kyu",
      role: "ADC",
      team: "HLE",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e9/Hanwha_Life_Esportslogo_profile.png",
      price: 5,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/70/HLE_Deft_2021_Split_2.png",
      assists: 5,
      deaths: 1,
      kills: 3,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Keria",
      realname: "	Ryu Min-seok",
      role: "SUPPORT",
      team: "T1",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/78/T1logo_profile.png",
      price: 5,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/82/T1_Keria_2021_Split_2.png",
      assists: 13,
      deaths: 4,
      kills: 1,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "BeryL",
      realname: "Cho Geon-hee ",
      role: "SUPPORT",
      team: "DK",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/DWG_KIAlogo_square.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a6/DK_BeryL_2021_Split_2.png",
      assists: 12,
      deaths: 2,
      kills: 0,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Vsta",
      realname: "	Oh Hyo-seong ",
      role: "SUPPORT",
      team: "HLE",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e9/Hanwha_Life_Esportslogo_profile.png",
      price: 3,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/12/HLE_Vsta_2021_Split_2.png",
      assists: 4,
      deaths: 6,
      kills: 0,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
  ],
  status: null,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {},
  extraReducers: {
    [playerActions.updatePlayer.pending]: (state) => {
      state.status = "loading";
    },
    [playerActions.updatePlayer.fulfilled]: (state) => {
      state.status = "success";
    },
    [playerActions.updatePlayer.rejected]: (state) => {
      state.status = "failed";
    },
    [playerActions.saveall.pending]: (state) => {
      state.status = "loading";
    },
    [playerActions.saveall.fulfilled]: (state) => {
      state.status = "success";
    },
    [playerActions.saveall.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const {} = playerSlice.actions;
export default playerSlice.reducer;
