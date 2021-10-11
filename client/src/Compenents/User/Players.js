import React, { useState } from "react";
import { useSelector } from "react-redux";
import Player from "./Player";

const Players = () => {
  const players = useSelector((state) => state.players.players);
  const [role, setrole] = useState("");
  const [team, setteam] = useState("");
  const handleRole = (role) => {
    setrole(role);
  };
  const handleTeam = (team) => {
    setteam(team);
  };
  const handleClearRole = () => {
    setrole("");
  };
  const handleClearTeam = () => {
    setteam("");
  };

  return (
    <div className="players-screen">
      <div>
        <button
          className={role === "MID" && "line"}
          onClick={() => (role === "" ? handleRole("MID") : handleClearRole())}
        >
          MID LANERS
        </button>
        <button
          className={role === "TOP" && "line"}
          onClick={() => (role === "" ? handleRole("TOP") : handleClearRole())}
        >
          {" "}
          TOP LANER
        </button>
        <button
          className={role === "JUNGLE" && "line"}
          onClick={() =>
            role === "" ? handleRole("JUNGLE") : handleClearRole()
          }
        >
          {" "}
          JUNGLERS
        </button>
        <button
          className={role === "ADC" && "line"}
          onClick={() => (role === "" ? handleRole("ADC") : handleClearRole())}
        >
          {" "}
          ADC'S
        </button>
        <button
          className={role === "SUPPORT" && "line"}
          onClick={() =>
            role === "" ? handleRole("SUPPORT") : handleClearRole()
          }
        >
          {" "}
          SUPPORTS
        </button>
      </div>
      <div>
        <button
          className={team === "TGS" && "line"}
          onClick={() => (team === "" ? handleTeam("TGS") : handleClearTeam())}
        >
          {" "}
          TGS
        </button>
        <button
          className={team === "T1" && "line"}
          onClick={() => (team === "" ? handleTeam("T1") : handleClearTeam())}
        >
          {" "}
          T1
        </button>
        <button
          className={team === "S7AB L HADDA" && "line"}
          onClick={() =>
            team === "" ? handleTeam("S7AB L HADDA") : handleClearTeam()
          }
        >
          {" "}
          S7AB L HADDA
        </button>
        <button
          className={team === "Pushi top" && "line"}
          onClick={() =>
            team === "" ? handleTeam("Pushi top") : handleClearTeam()
          }
        >
          {" "}
          Pushi top
        </button>
      </div>
      <div className="player-list">
        {" "}
        {role === "" && team === ""
          ? players.map((el) => <Player player={el} />)
          : role === role && team === ""
          ? players
              .filter((el) => el.role === role)
              .map((el) => <Player player={el} />)
          : role === "" && team === team
          ? players
              .filter((el) => el.team === team)
              .map((el) => <Player player={el} />)
          : players
              .filter((el) => el.role === role && el.team === team)
              .map((el) => <Player player={el} />)}
      </div>
    </div>
  );
};

export default Players;
