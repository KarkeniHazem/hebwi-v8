import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../features/user/actions";
import "./PickedPlayer.css";

function PickedPlayer({ total,budget }) {
  const user = useSelector((state) => state.Users.users);
  const players = useSelector((state) => state.players.players);

  const dispatch = useDispatch();
  const top = players.find((el) => el.name === user.team?.TOP.name);
  const mid = players.find((el) => el.name === user.team?.MID.name);
  const jng = players.find((el) => el.name === user.team?.JUNGLE.name);
  const supp = players.find((el) => el.name === user.team?.SUPPORT.name);
  const adc = players.find((el) => el.name === user.team?.ADC.name);

  const topLp =
    top?.kills * 2 +
    top?.assists -
    top?.deaths +
    top?.firstTowerKill +
    top?.baronKills +
    top?.firstBloodKill +
    top?.win;

  const midLp =
    mid?.kills * 2 +
    mid?.assists -
    mid?.deaths +
    mid?.firstTowerKill +
    mid?.baronKills +
    mid?.firstBloodKill +
    mid?.win;

  const jngLp =
    jng?.kills * 2 +
    jng?.assists * 2 -
    jng?.deaths * 2 +
    jng?.firstTowerKill +
    jng?.baronKills +
    jng?.firstBloodKill +
    jng?.win;

  const suppLp =
    supp?.kills +
    supp?.assists * 2 -
    supp?.deaths +
    supp?.firstTowerKill +
    supp?.baronKills +
    supp?.firstBloodKill +
    supp?.win;

  const adcLp =
    adc?.kills * 3 +
    adc?.assists * 1 -
    adc?.deaths * 2 +
    adc?.firstTowerKill +
    adc?.baronKills +
    adc?.firstBloodKill +
    adc?.win;

  const isAuth = localStorage.getItem("token");

  useEffect(() => {
    if (isAuth) {
      dispatch(userActions.current());
    }
  }, []);
  const handletot = () => {
    total(topLp + midLp + jngLp + suppLp + adcLp);
  };

  handletot();
  const hadlebudg =()=> {
    budget(30-top?.price - mid?.price-jng?.price-adc?.price-supp?.price)
  }
  hadlebudg()

  return (
    <div>
      <div class="container">
        <ul class="responsive-table">
          <li class="table-row">
            <div className="col col-1">
              {" "}
              <div className="player-avatar">
                {" "}
                <img src={user.team?.TOP.imgUrl} alt="" />
              </div>
            </div>
            <div class="col col-1" data-label="Job Id">
              <img style={{ width: "30px" }} src="/icons/TOP.png" alt="" />
            </div>
            <div class="col col-2" data-label="Customer Name">
              {user.team?.TOP.name}
            </div>
            <div class="col col-3" data-label="Amount">
              {user.team?.TOP.price}M
            </div>
            <div class="col col-4" data-label="Payment Status">
              {user.team?.TOP.team}
            </div>
            <div class="col col-5" data-label="Payment Status">
              {topLp} pts
            </div>
          </li>
          <li class="table-row">
            <div className="col col-1">
              {" "}
              <div className="player-avatar">
                {" "}
                <img src={user.team?.JUNGLE.imgUrl} alt="" />
              </div>
            </div>
            <div class="col col-1" data-label="Job Id">
              <img style={{ width: "30px" }} src="/icons/JUNGLE.png" alt="" />
            </div>
            <div class="col col-2" data-label="Customer Name">
              {user.team?.JUNGLE.name}
            </div>
            <div class="col col-3" data-label="Amount">
              {user.team?.JUNGLE.price}M
            </div>
            <div class="col col-4" data-label="Payment Status">
              {user.team?.JUNGLE.team}
            </div>
            <div class="col col-5" data-label="Payment Status">
              {jngLp} pts
            </div>
          </li>
          <li class="table-row">
            <div className="col col-1">
              {" "}
              <div className="player-avatar">
                {" "}
                <img src={user.team?.MID.imgUrl} alt="" />
              </div>
            </div>
            <div class="col col-1" data-label="Job Id">
              <img style={{ width: "30px" }} src="/icons/MIDDLE.png" alt="" />
            </div>
            <div class="col col-2" data-label="Customer Name">
              {user.team?.MID.name}
            </div>
            <div class="col col-3" data-label="Amount">
              {user.team?.MID.price}M
            </div>
            <div class="col col-4" data-label="Payment Status">
              {user.team?.MID.team}
            </div>
            <div class="col col-5" data-label="Payment Status">
              {midLp} pts
            </div>
          </li>
          <li class="table-row">
            <div className="col col-1">
              {" "}
              <div className="player-avatar">
                {" "}
                <img src={user.team?.SUPPORT.imgUrl} alt="" />
              </div>
            </div>
            <div class="col col-1" data-label="Job Id">
              <img style={{ width: "30px" }} src="/icons/SUPPORT.png" alt="" />
            </div>
            <div class="col col-2" data-label="Customer Name">
              {user.team?.SUPPORT.name}
            </div>
            <div class="col col-3" data-label="Amount">
              {user.team?.SUPPORT.price}M
            </div>
            <div class="col col-4" data-label="Payment Status">
              {user.team?.SUPPORT.team}
            </div>
            <div class="col col-5" data-label="Payment Status">
              {suppLp} pts
            </div>
          </li>
          <li class="table-row">
            <div className="col col-1">
              {" "}
              <div className="player-avatar">
                {" "}
                <img src={user.team?.ADC.imgUrl} alt="" />
              </div>
            </div>
            <div class="col col-1" data-label="Job Id">
              <img style={{ width: "30px" }} src="/icons/ADC.png" alt="" />
            </div>
            <div class="col col-2" data-label="Customer Name">
              {user.team?.ADC.name}
            </div>
            <div class="col col-3" data-label="Amount">
              {user.team?.ADC.price}M
            </div>
            <div class="col col-4" data-label="Payment Status">
              {user.team?.ADC.team}
            </div>
            <div class="col col-5" data-label="Payment Status">
              {adcLp} pts
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PickedPlayer;
