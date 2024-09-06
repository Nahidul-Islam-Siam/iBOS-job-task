/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContex = createContext(null);

const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

 const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  // Github login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider);
  };

  // Sign out
  const logOut = () => {
    setLoading(true); // Set loading true to show spinner while logging out
    return signOut(auth).finally(() => setLoading(false));
  };

  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false); // Set loading to false once auth state is resolved
    });

    return () => unsubscribe();
  }, []);

  const allValues = {
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    logOut,
    user,
    loading,
  };

  if (loading) {
    return <h1 className="text-4xl text-red-500">Loading......</h1>;
  }

  return (
    <AuthContex.Provider value={allValues}>
      {children}
    </AuthContex.Provider>
  );
};

export default FirebaseProvider