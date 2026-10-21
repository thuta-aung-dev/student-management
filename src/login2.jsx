import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Login2(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");

    const handleLogin = async(e) => {

        e.preventDefault();
        setError("");

        if(!email.trim()  || !password){
            alert("Please enter email and password.");
            return;
        }

        try {

            setLoading(true);

            await signInWithEmailAndPassword(
                auth,
                email.trim(),
                password
            );

            alert("Login successfully!");
            
        } catch (error) {
            
            console.error(error);
            setError("Invalid email or password.")
        }finally{
            setLoading(false);
        }
    }

    return(
        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Welcome Back</h2>

            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="mb-4 w-full rounded-lg border border-neutral-300 px-4 py-3"/>

                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required className="mb-4 w-full rounded-lg border border-neutral-300 px-4 py-3" />

                {error && (
                    <p className="mb-4 text-sm text-red-600">
                        {error}
                    </p>
                )}

                <button type="submit" disabled={loading} className="w-full rounded-lg bg-neutral-950 px-4 py-3 text-white transition hover:bg-neutral-700 disabled:opacity-50">
                    {loading? "Logging in..." : "Login"}
                </button>
            </form>
        </div>

        
    )
}export default Login2;