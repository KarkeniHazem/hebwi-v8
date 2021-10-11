const express = require("express");
const playerCtrl = require("../controllers/playerCtrl");
const Player = require("../models/Player");
const router = express.Router();

//get all
router.get("/", playerCtrl.get);
//get one
router.get("/:id", playerCtrl.getOne);
//put one
router.put("/:id", playerCtrl.put);
//post
router.post("/", playerCtrl.post);
 //update all
 router.put("/", playerCtrl.upadate);
 //post players
 router.post ("/all", playerCtrl.saveall);


module.exports = router;
