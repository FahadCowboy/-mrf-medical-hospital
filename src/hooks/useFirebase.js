import { useEffect, useState } from "react"
import initializeFirebaseAuthentication from "../firebase/firebase.init"
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile  } from "firebase/auth";


initializeFirebaseAuthentication()

const useFirebase = () => {
   const [user, setUser] = useState(null)
   const [error, setError] = useState('')
   const [loginUser, setLoginUser] = useState(null)
   const auth = getAuth()
   const googleProvider = new GoogleAuthProvider()

   

   const signinWithGoogle = () => {
      signInWithPopup(auth, googleProvider)
      .then(result => {
         const user = result.user
         setUser(user)
      })
      .catch(error => {
         const errorMessage = error.message
         setError(errorMessage)
      })
   }

   const registerWithEmailPassword = (name, email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
         const user = result.user
         // setUser(user) 
         updateProfile(auth.currentUser, { displayName: name })
         .then(result => {
            // Profile updated!
            // ...
         })
         .catch((error) => {
            // An error occurred
            // ...
         });
         setUser(user)
      })
      .catch(error => {
         const errorCode = error.code
         setError(errorCode)
      })

      
   }

   // const addName = name => {
   //    updateProfile(auth.currentUser, { displayName: name })
   //    .then(result => {
   //       // Profile updated!
   //       // ...
   //    })
   //    .catch((error) => {
   //       // An error occurred
   //       // ...
   //    });
   // }

   const loginWithEmailPassword = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
      .then(result => {
         const user = result.user
         setLoginUser(user)
      })
      .catch(error => {
         const errorCode = error.code
         setError(errorCode)
      })
   }

   const logOut = () => {
      signOut(auth)
      .then(result => {
         setLoginUser(null)
      })
   }

   useEffect(() => {
      onAuthStateChanged(auth, user => {
         if(user){
            setError('')
            setUser(user)
         }
      })
   }, [])

   useEffect(() => {
      onAuthStateChanged(auth, loginUser => {
         if(loginUser){
            setError('')
            setLoginUser(loginUser)
         }
      })
   }, [loginUser])



   return {
      user,
      error,
      signinWithGoogle,
      registerWithEmailPassword,
      loginWithEmailPassword,
      logOut,
      loginUser
   }
}

export default useFirebase