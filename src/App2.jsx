import Login2 from "./login2";
import Register from "./register";
import Clothing from "./clothing";
import { useState,useEffect } from "react";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "./firebase";

function App2(){

        const [user,setUser] = useState(null);
        const [loading,setLoading] = useState(true)
        const [showRegister,setShowRegister] = useState(false);

        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
                setUser(currentUser);
                setLoading(false);
            });

            return() => unsubscribe();
        },[]);

        const handleLogout = async() => {

            try {
                
                await signOut(auth);
            } catch (error) {

                console.error(error);
                alert("Fail to logout.")
                
            }
        };

        if(loading){
            return <p className="p-10 text-center">Checking account...</p>;
        }

        return(
            <div>
                {user? (
                    <>
                    <div className="flex item-center justify-between border-b p-4">
                        <p className="text-sm">{user.email}</p>

                        <button onClick={handleLogout} className="rounded-full bg-black px-5 py-2 text-sm text-white">Logout</button>
                    </div>

                    <Clothing/>
                    </>
                ):showRegister?(
                    <>
                    <Register/>
                    <button onClick={()=>setShowRegister(false)} className="max-auto mt-4 block text-sm underline">
                        Already have an account? Login
                    </button>
                    </>
                )
            :(
                <>
                    <Login2/>
                    <button onClick={()=>setShowRegister(true)} className="mx-auto mt-4 block text-sm underline">
                        Don't have an account ? Register
                    </button>
                </>
            )}
            </div>
        )
}
export default App2;