/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContex = createContext(null)


const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();



const FirebaseProvider = ({children}) => {

const [user,setUser] = useState(null)
const [loading,setLoading]= useState(true)
console.log(user);

    // create user
    const createUser =(email, password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user 
    const signInUser =( email, password)=>{
        setLoading(true)
      return  signInWithEmailAndPassword(auth, email, password)
    }

    // goole login
    const googleLogin = () =>{
        setLoading(true)
      return  signInWithPopup(auth, GoogleProvider)
    }

    // github login
    const githubLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, GithubProvider)
    }

    // sighnOut
    const logOut = ()=>{
        setUser(null)
     return signOut(auth)
    }
    // observer
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoading(false)
   setUser(user)
        }
      });

      return unsubscribe()
},[])


    const allValues={
createUser,
signInUser,
googleLogin,
githubLogin,
logOut,
user,
loading
    }
    return (
        <AuthContex.Provider value={allValues}>
            {children}
        </AuthContex.Provider>
    );
};

export default FirebaseProvider;