import { useEffect, useState } from 'react'
import initAuth from '../firebase/init'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";



initAuth()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [IsLoading, setIsLoading] = useState(true)
    const auth = getAuth();



    // email password register
    const registerUser = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                setUser(user)


            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false));

    }

    // email password login
    const loginUser = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])



    // logout user
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        registerUser,
        loginUser,
        IsLoading,
        logOut
    }


}


export default useFirebase;