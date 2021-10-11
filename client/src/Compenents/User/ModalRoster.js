import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../features/user/actions";

const ModalRoster = ({ setshow, show, role, ping, setPing,budget,setbudget}) => {
  const roster = useSelector((state) => state.players.players);
  const list = roster.filter((el) => el.role === role);
  const user = useSelector((state) => state.Users.users);
  const [team, setteam] = useState({});
  list ? console.log(list) : console.log("wait");
  const dispatch = useDispatch();

  return (
    <div className="modal-screen">
      <div className="modal-body">
        <div className="modal-headers">
          <h2>{role}</h2>
          <button
            className="btn-closee"
            onClick={() => {
              setshow(!show);
            }}
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div className="list-roster">
          {list.map((el) => (
            <table className>
              <tr>
                <td>
                  {" "}
                  <p>{el.name}</p>
                </td>
                <td>
                  <p>{el.price}</p>
                </td>
                <td>
                  <p>{el.team}</p>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(
                        userActions.putteam({
                          id: user._id,
                          team: { ...user.team, [`${role}`]: el },
                        })
                      );
                      setPing(!ping);
                      setshow(!show);
                      
                    }}
                  >
                    pick
                  </button>
                </td>
              </tr>
            </table>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalRoster;
