import React,{useState ,useEffect,createContext,useContext} from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


firebase.initializeApp(firebaseConfig);
const AuthContext = createContext();
export const AuthProvider = (props) => {
    const auth =Auth();
    return <AuthContext.Provider value={auth}> {props.children} </AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext);

const Auth = () => {
    const [user,setUser] = useState(null);
    const [error,setError] = useState(null);
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                const crr=user;
              setUser(crr)
            }
          });
    },[])
    const signUp = (name,email,password)=>{
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res=>{
            firebase.auth().currentUser.updateProfile({
            displayName: name
        })
        .then(res => {
            setUser(res.user)
            window.history.back();
        })
    });
    }  

    const signIn = (email,password)=>{
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            setUser(res.user);
            window.history.back();
            
        })
        .catch(error=>{
            console.log(error);
            setError(error)
        });
    }
    const signOut = ()=>{
        return firebase.auth().signOut()
        .then(res => setUser(null))
        .catch(error=>console.log(error))
    }
    return {
        user,
        error,
        signUp,
        signIn,
        signOut
    }
};

export default Auth;