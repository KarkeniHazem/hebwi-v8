import React, { useState } from "react";
import { useSelector } from "react-redux";

const Plist = ({ role }) => {
  console.log(role);

  return (
    <div className="list-player">
      {role.map((el) => (
        <h1>{el.name}</h1>
      ))}
    </div>
  );
};

export default Plist;
