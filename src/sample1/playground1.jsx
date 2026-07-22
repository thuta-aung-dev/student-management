import { useState } from "react";
import { useEffect } from "react";
import useFetch from './useFetch.jsx';
import PostDetails from "./PostDetails.jsx";

function Playground1(){

    /*const [users,setUser]=useState([]);
    const [loading, setloading]= useState(true);
    const [error , setError] = useState(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            if(!response.ok){
                throw Error('Data cannot be reach!')
            }
            return response.json();
        })
        .then(data=>{
            setUser(data);
            setloading(false);
        })
        .catch (err=>{
            setError(err.message);
            setloading(false)
        });
    },[]);*/
    const {data:users,loading,error}= useFetch('https://jsonplaceholder.typicode.com/users');
   
return(
    /*<div style={{ padding:'20px', background:'#222', color:'white', minHeight:"100vh"}}>
        <h1>Userlist (From API)🌐</h1>

        {loading?<p>ခဏစောင့်...ပါ </p>:
        (
            <ul>
               { users.map(user=>(
                    <li key={user.id} style={{margin:'20px', color:'#646cff'}}>
                        {user.name}-{user.email}l
                    </li>
                ))
                }
            </ul>
        )
        }
    </div>*/
    <div style={{padding:'20px', background:'#222', color:'white'}}>
        <h1>Users list   (  Custom Hook သုံးထားသည်)⚓</h1>
        {loading && <p>loading...</p>}
        {error && <p style={{color:'red'}}> {error} </p>}
        {users && users.map(user=>(
            <p key={user.id}>
                {user.name}
            </p>))}
        
    </div>
)
}
export default Playground1;