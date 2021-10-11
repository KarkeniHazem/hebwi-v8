
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../features/user/actions";
import User from "./User";

const Userlist = ({ ping,setPing }) => {
    
    const dispatch = useDispatch();
    const list = useSelector((state) => state.Users.users);
    
    useEffect(() => {
        dispatch(userActions.get());
      }, [ping]);
      
    return (
        <div>
           <div> <h2>chtjtj</h2></div> 
           {/* { list.map( (user)=> <User ping={ping} setPing={setPing} user={user}/>)} */}
        </div>
    )
}

export default Userlist
