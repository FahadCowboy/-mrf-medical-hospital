import { useEffect, useState } from "react"
import initializeFirebaseAuthentication from "../firebase/firebase.init"
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


initializeFirebaseAuthentication()

const useFirebase = () => {
   const [user, setUser] = useState(null)
   const [error, setError] = useState('')
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

   const registerWithEmailPassword = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
         const user = result.user
         setUser(user) 
      })
      .catch(error => {
         const errorCode = error.code
         setError(errorCode)
      })
   }

   const loginWithEmailPassword = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
      .then(result => {
         const user = result.user
         setUser(user)
      })
      .catch(error => {
         const errorCode = error.code
         setError(errorCode)
      })
   }

   const logOut = () => {
      signOut(auth)
      .then(result => {
         setUser(null)
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

   





























   return {
      user,
      error,
      signinWithGoogle,
      registerWithEmailPassword,
      loginWithEmailPassword,
      logOut
   }
}

export default useFirebase