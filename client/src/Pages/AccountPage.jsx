import { useContext,useState} from "react";
import a from './a.jpg';
import { Link, Navigate} from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";

export default function AccountPage(){
    const [redirect,setRedirect] = useState(null);
    const {user,ready,setUser} = useContext(UserContext);

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }
    
    if(!ready){
        return "loading...";
    }

    if(ready && !user && !redirect) {
        return <Navigate to = {'/login'} />
    }

      if(redirect){
        return <Navigate to={redirect} />
      }

    return(
        <div className="mx-auto mt-28 text-white bg-red-300 m-8">
            <nav className="h-20 flex items-center justify-center">
                <Link to={'/'} className="underline absolute left-40">
                    <p> &lt;&lt;&nbsp;go back</p>
                </Link>
                <div className="bg-primary p-3 rounded-full flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <div>My Profile</div>
                </div>
                
            </nav>
            
            <div className="flex">
                <div className="relative w-1/2 flex justify-center py-18 px-24">
                    <div className="profile pl-80 py-6">
                        <img className="rounded-full" src={a} alt={user.name} />
                        <h2>{user.name}</h2>
                        <br/>
                        <Link className="underline" to={'/mybookings'}>My Bookings</Link>
                    </div>
                    
                </div>
                <div className="w-1/2 pr-80 text-lg">
                    <p>{user.bio}</p>
                    <h3 className="text-center">User Details</h3>
                    <ul>
                        <li>Email</li>
                        <input type="text" placeholder={user.email} className="w-3/4 py-1 px-2 rounded-lg border border-gray-400 mb-2" />
                        <li>Change Password</li>
                        <input type="password" disabled placeholder="Current Password" className="w-3/4 py-1 px-2 rounded-lg border border-gray-400 mb-2" />
                        <input type="password" disabled placeholder="New Password" className="w-3/4 py-1 px-2 rounded-lg border border-gray-400 mb-2" />
                        <input type="password" disabled placeholder="Confirm Password" className="w-3/4 py-1 px-2 rounded-lg border border-gray-400 mb-2" />
                    </ul>
                </div>
            </div>
            <div className="pt-20 h-20 flex items-center justify-center">
                <div className="justify-around items-center ">
                <p>Logged in as {user.name} ({user.email})</p>
                <button className="primary px-2 my-2" onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    );
}