import { useState,useEffect } from "react";
import Login from "./login";
//import Notepad from "./note";
import Inventory from "./Inventory";
import StuMan from "./StuMan";
import TodoList from "./todolist";
import Notepad from "./note";
import Social from "./social";

function Connect(){
    const [user,setUser]= useState(null);

    return(
        <div>
            <div>
                {!user?(
                    <Login setLoggedInUser = {setUser}/>
                ):(
                    <div>
                        <div>
                            <span>Account:<strong>{user.username}({user.role})</strong></span>
                            <button onClick={()=>setUser(null)}>Logout </button>
                        </div>
                        <Social user={user}/>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Connect;