/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoutes = ({children}) => {
    const {user} = useAuth()
    const location = useLocation()
    if(!user){
        return <Navigate to='/signIn' state={location.pathname || '/'}/>
    }
    return (
        <div>
           {children} 
        </div>
    );
};

export default PrivateRoutes;