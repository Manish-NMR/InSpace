import { useContext} from "react";
import { Navigate, useNavigate} from "react-router-dom";
import { UserContext } from "./UserContext";
import axios from "axios";

export default function LogOut(){
    const navigate = useNavigate();
    const {user,ready,setUser} = useContext(UserContext);

    async function logout() {
        await axios.post('/logout');
        
        setUser(null);
        navigate('/');
    }
    
    if(!ready){
        return "loading...";
    }

    if(ready && !user && !redirect) {
        return <Navigate to = {'/login'} />
    }
    if(redirect){
        return <Navigate to={'/'} />
      }
    
    return(
        <div>
            <button onClick={logout} className="primary mx-w-sm " >Logout</button>
        </div>
    );
}