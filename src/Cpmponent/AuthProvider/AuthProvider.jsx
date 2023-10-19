import { createContext } from "react";
import { auth } from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    
    // http://localhost:5000/product


  const googleLogin =  () =>{
    return signInWithPopup(auth, GoogleProvider);
  }
  
  const emailPasswordLogin =  (email, password) =>{
     return createUserWithEmailAndPassword(auth, email, password)
  }
    



        

    const authData = {
        googleLogin,
        emailPasswordLogin
        
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
