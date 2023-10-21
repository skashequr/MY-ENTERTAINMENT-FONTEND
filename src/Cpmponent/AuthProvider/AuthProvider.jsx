import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    
    // https://back-end-nine-lake.vercel.app/product
    const [lodder , setLodder] = useState(true);
    const [user , setUser] = useState(null);

  const googleLogin =  () =>{
    setLodder(true);
    return signInWithPopup(auth, GoogleProvider);
  }
  
  const emailPasswordLogin =  (email, password) =>{
    setLodder(true);
     return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginWithEmailPass = (email, password) =>{
    setLodder(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
    

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLodder(false);
    
     
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    setLodder(true)
    return signOut(auth)
      
  };  

    const authData = {
        googleLogin,
        emailPasswordLogin,
        loginWithEmailPass,
        user,
        lodder,
        logOut,
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
