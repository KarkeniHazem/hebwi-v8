const express = require("express");
const playerCtrl = require("../controllers/playerCtrl");
const router = express.Router();
const Team = require("../models/Team");

//Team Create
router.post("/create", async (req, res) => {
  try {
    const { name, TOP, MID, JUNGLE, ADC, SUPPORT } = req.body;
    //Validate is name exist

    const oldTeam = await Team.findOne({ name });
    console.log(oldTeam);
    if (oldTeam) {
      res.status(402).send("team name already exist");
    } else {
      const newTeam = new Team({
        name,
        TOP,
        MID,
        JUNGLE,
        ADC,
        SUPPORT,
      });
      newTeam.save();
      res.status(200).send(newTeam);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
//Fill Team
router.put("/fill/:team_id", async (req, res) => {
  try {
    const { TOP, MID, JUNGLE, SUPPORT, ADC } = req.body;
    const result = await Team.updateOne(
      { _id: req.params.team_id },
      { $set: { TOP, MID, JUNGLE, SUPPORT, ADC } }
    );
    res.status(200).send(result);
  } catch (err) {
    console.log("err", err);
    res.status(400).send(err);
  }
});
//GET ALL TEAM
router.get("/all", async () => {
  try {
    const allTeams = await Team.find({});
    res.status(200).send(allTeams);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
// GET TEAM by Id
router.get("/:team_id", async () => {
  try {
    const team = await Team.findOne({ _id: req.params.team_id })
      .populate("TOP MID JUNGLE ADC SUPPORT")
      .then((team) => res.status(200).send(team));
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
