// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { userActions } from "../../features/user/actions";

// import Plist from "../Plist";

// const List = () => {
//   const user = useSelector((state) => state.Users.users);
//   const players = useSelector((state) => state.players.players);
//   const dispatch = useDispatch();
//   const [team, setteam] = useState({
//     TOP: {},
//     MID: {},
//     JUNGLER: {},
//     ADC: {},
//     SUPPORT: {},
//   });

//   const handleAdd = () => {
//     dispatch(userActions.putteam({ id: user._id, team }));
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "spaceBetween" }}>
//       <div style={{ backgroundColor: "red" }}>
//         {players
//           .filter((el) => el.role === "TOP")
//           .map((el) => (
//             <div>
//               <h1>{el.name}</h1>
//               <button onClick={() => setteam({ ...team, TOP: el })}>
//                 add to team
//               </button>
//             </div>
//           ))}
//       </div>
//       <div style={{ backgroundColor: "green" }}>
//         {players
//           .filter((el) => el.role === "MID")
//           .map((el) => (
//             <div>
//               <h1>{el.name}</h1>
//               <button onClick={() => setteam({ ...team, MID: el })}>
//                 add to team
//               </button>{" "}
//             </div>
//           ))}
//       </div>
//       <div style={{ backgroundColor: "pink" }}>
//         {players
//           .filter((el) => el.role === "JUNGLE")
//           .map((el) => (
//             <div>
//               <h1>{el.name}</h1>
//               <button onClick={() => setteam({ ...team, JUNGLER: el })}>
//                 add to team
//               </button>{" "}
//             </div>
//           ))}
//       </div>
//       <div style={{ backgroundColor: "tomato" }}>
//         {players
//           .filter((el) => el.role === "ADC")
//           .map((el) => (
//             <div>
//               <h1>{el.name}</h1>
//               <button onClick={() => setteam({ ...team, ADC: el })}>
//                 add to team
//               </button>{" "}
//             </div>
//           ))}
//       </div>{" "}
//       <div style={{ backgroundColor: "gray" }}>
//         {players
//           .filter((el) => el.role === "SUPPORT")
//           .map((el) => (
//             <div>
//               <h1>{el.name}</h1>
//               <button onClick={() => setteam({ ...team, SUPPORT: el })}>
//                 add to team
//               </button>{" "}
//             </div>
//           ))}
//       </div>
//       <button onClick={handleAdd}>comfirm</button>
//     </div>
//   );
// };

// export default List;
