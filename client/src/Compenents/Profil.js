import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../features/user/actions";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Fixtures from "./User/Fixtures";
import Lobbies from "./User/Lobbies";
import Players from "./User/Players";
import Roster from "./User/Roster";
import { Editprofile } from "./Editprofile";

export default function Profil() {
  const user = useSelector((state) => state.Users.users);
  console.log(user);

  return (
    <div>
      <h1> jawak behi profilak</h1>
      <h3> Ahla khalil</h3>
    </div>
  );
}
