import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Register(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);

    const handleRegister = async(e) => {
        e.preventDefault();
        setError("");

        if(!email.trim() || !password){
            alert("Please enter email and password.");
            return;
        }

        try {
            setLoading(true);

            await createUserWithEmailAndPassword(
                auth,
                email.trim(),
                password
            );
            alert("Account created Successfully!")
            
        } catch (error) {
            console.error(error);

            if(error.code === "auth/email-already-in-use"){
                setError("This email is already registered.");
            }else if(error.code === "auth/weak-password"){
                setError("Password must be at least 6 chacters.");
            }else if (error.code === "auth/invalid-email"){
                setError("Please enter a valid email.");
            }else {
                setError("Failed to create account. Please try again. ");
            }
        }finally{
            setLoading(false);
        };
    }
    return(
        <div className="mx-auto mt-10 max-w-md rounded-2xl border p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">
                Create Account
            </h2>

            <form onSubmit={handleRegister}>

                <label className="mb-2 block text-sm">Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="mb-4 w-full rounded-lg border px-4 py3" required/>

                <label className="mb-2 block text-sm">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter at least 6 characters" className="mb-4 w-full rounded-lg border px-4 py-3"
                minLength={6}
                required/>

                {error && (
                    <p className="mb-4 text-sm text-red-600">
                        {error}
                    </p>
                )}

                <button type="submit" disabled={loading} className="w-full rounded-lg bg-black px-4 py-3  text-white disables:opacity-50">
                    {loading? "Creating account...": "Register"}
                </button>
            </form>
        </div>
    )
}
export default Register;