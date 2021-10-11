import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Top from "../../icons/TOP.png";
import Mid from "../../icons/MIDDLE.png";
import Jng from "../../icons/JUNGLE.png";
import Adc from "../../icons/ADC.png";
import supp from "../../icons/SUPPORT.png";
import ModalRoster from "./ModalRoster";
import PickedPlayer from "../PickedPlayer";
import Swal from "sweetalert2/src/sweetalert2.js";

const Roster = ({ ping, setPing }) => {
  const dispatch = useDispatch();

  const [role, setrole] = useState("");
  const [show, setshow] = useState(false);

  const [totalPoint, settotalPoint] = useState(0);
  const user = useSelector((state) => state.Users.users);
  const [budget, setbudget] = useState(0);
 

  const bugets =(bud) =>{
    setbudget(bud)
  }
  const total = (tot) => {
    settotalPoint(tot);
  };

  let chechp = [];
  let chechps = [
    ...chechp,
    user.team?.TOP.team,
    user.team?.MID.team,
    user.team?.JUNGLE.team,
    user.team?.ADC.team,
    user.team?.SUPPORT.team,
  ];

  const counts = {};

  chechps.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  let vals = Object.values(counts);
  console.log(vals);
  const check = vals.some((el) => el > 2);
  console.log(check);

  const handleconfirm = () => {
    if (!check) {
      Swal.fire("Your team has been created sucessfully!!", "", "success");
    } else {
      Swal.fire({
        icon: "error",
        title: "Please make sure you to player maximum from same team!",
        text: "",
      });
    }
  };
  return (
    <div className="rooster">
      {show ? (
        <ModalRoster
          ping={ping}
          setPing={setPing}
          show={show}
          setshow={setshow}
          role={role}
        
        />
      ) : null}

      <PickedPlayer setshow={setshow} total={total} budget={bugets} />
      <div
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <h1 className="ritob">
          SKT T1
          <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/fr_FR/babea8472b0fcbd38f588c712444393c8b1a9807/assets/fr_FR/assets/divider.png" />
        </h1>

        <div>
          <h4>Total points:</h4>
          {totalPoint}
          <h4>Budget:</h4>
          {budget} M
        </div>
        <div className="league-map">
          <button
            className="btn-top"
            onClick={() => {
              setshow(!show);
              setrole("TOP");
            }}
          >
            <img src={Top} style={{ width: "30px" }} />
          </button>
          <button
            className="btn-mid"
            onClick={() => {
              setshow(!show);
              setrole("MID");
            }}
          >
            <img src={Mid} style={{ width: "30px" }} />
          </button>
          <button
            className="btn-jng"
            onClick={() => {
              setshow(!show);
              setrole("JUNGLE");
            }}
          >
            <img src={Jng} style={{ width: "30px" }} />
          </button>
          <button
            className="btn-adc"
            onClick={() => {
              setshow(!show);
              setrole("ADC");
            }}
          >
            <img src={Adc} style={{ width: "30px" }} />
          </button>
          <button
            className="btn-supp"
            onClick={() => {
              setshow(!show);
              setrole("SUPPORT");
            }}
          >
            <img src={supp} style={{ width: "30px" }} />
          </button>
          <button className="conf-btn" onClick={handleconfirm}>
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roster;
