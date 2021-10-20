
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
   const [email, setEmail] = useState('')
   const [Password, setPassword] = useState('')
   const [errorPassword, setErrorPassword] = useState('')
   const history = useHistory()
   const {signinWithGoogle, user, loginUser, error, loginWithEmailPassword} = useAuth()

   const location = useLocation()
   const redirect_uri = location.state?.from || '/home'

   const handleEmail = e => {
      setEmail(e.target.value)
   }

   const handlePassword = e => {
      setPassword(e.target.value)
   }

   const handleLogin = e => {
      e.preventDefault()

      
   }

   const handleGoogleLogin = () => {
      signinWithGoogle()
      .then(result => {
         const user = result.user
         // setUser(user)
         history.push(redirect_uri)
      })
   }
   const handleEmailPaaLogin = () => {
      loginWithEmailPassword(email, Password)
      .then(result => {
         // const user = result.user
         // setUser(user)
         history.push(redirect_uri)
      })
   }

   console.log(loginUser)
   // console.log(error)
   return (
      <div className="form-container d-flex justify-content-center align-items-center">
         <div className="form-wrapper bg-white p-4 border border-light">
            <h2 className="text-primary">Login your account</h2>
            <form onSubmit={handleLogin} className="">
               <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
               </div>
               <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" required/>
               </div>
               <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                  <label className="form-check-label" htmlFor="exampleCheck1">Keep me logged in</label>
               </div>
               <div className="d-flex flex-column">
                  <button type="submit" className="btn btn-primary" onClick={handleEmailPaaLogin}>Login</button>
                  <button type="button" className="btn btn-outline-warning mt-2" onClick={handleGoogleLogin}>Login with Goole</button>
                  <Link to="/signup" className="mt-2">but Not registered yet?</Link>
               </div>
            </form>
         </div>
      </div>
   );
};
// signinWithGoogle
export default Login;