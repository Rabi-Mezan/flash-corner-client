import { useEffect, useState } from 'react'
import initAuth from '../firebase/init'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";



initAuth()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [IsLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const auth = getAuth();



    // email password register
    const registerUser = (email, password, name, history) => {
        console.log(name, email);
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(email, name, "POST")
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.push('/')

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


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }



    // cheking admin or not
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])




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
        admin,
        logOut
    }


}


export default useFirebase;