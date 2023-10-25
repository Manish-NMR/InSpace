import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
export default function RegisterPage(){
    const [name,setName] = useState('');
    const [redirect,setRedirect] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    async function registerUser(ev){
        ev.preventDefault();
        try{
            await axios.post('/register' ,{
            name,
            email,
            password,
            });
            alert("Registration Successful");
            setRedirect(true);
            
        }catch (e) {
            alert("Registration failed");
        }
        
    }
    if(redirect){
            return <Navigate to ={'/login'} />;
        }
    return (
        <div className=" bar mt-36 mx-auto relative grow flex items-center justify-around ">
            <div className="mb-64">
            <h1 className="text-4xl text-center text-white mb-4">Register</h1>
            <form className="max-w-md mx-auto " onSubmit={registerUser}>
                <input type="text" placeholder="John Doe" 
                value={name}
                onChange={ev => setName(ev.target.value)} />
                <input type="email" placeholder="Your@gmail.com" 
                value={email} 
                onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder="Password" 
                value={password} 
                onChange={ev => setPassword(ev.target.value)} />
                <button className="primary">Register</button>
                <div className="text-center py-2 text-white">
                    Have an account already  <Link className="underline text-blue-300" to={'/login'}>login here!!!</Link>
                </div>
            </form>
            </div>
        </div>
    );
}