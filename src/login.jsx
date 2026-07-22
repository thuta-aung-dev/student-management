import { useState,useEffect } from "react";

function Login({setLoggedInUser}){

    const [username,setUsername]= useState("");
    const [password,setPassword] = useState("");
    //const [loggedInUser,setLoggedInUser] = useState(null);

   /* const handleLogout=(e)=>{
        e.preventDefault();
        setLoggedInUser(null);
        setUsername("");
        setPassword("");

    }*/

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(username === "admin" && password ==="admin123")
            {
                setLoggedInUser({username:"Thuta Aung",role:"Admin"});
            }
            else if(username === "user" && password ==="user123")
            {
                setLoggedInUser({username:"Mg Mg", role:"user"});
            }
            else 
            {
                alert("Account not found!");
            }

    }

    return(
    <div>
        <h2>Login To My NotePad</h2>
        
        <div>
            
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                </div>
                <div>
                    <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit">submit</button>
            </form>
           
        </div>
    
    </div>)    
    
}
export default Login;