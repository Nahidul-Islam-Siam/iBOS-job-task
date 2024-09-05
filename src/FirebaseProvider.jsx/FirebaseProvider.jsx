import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContex = createContext(null)
const FirebaseProvider = ({children}) => {

    const createUser =(email, password)=>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    const allValues={
createUser,
    }
    return (
        <AuthContex.Provider value={allValues}>
            {children}
        </AuthContex.Provider>
    );
};

export default FirebaseProvider;