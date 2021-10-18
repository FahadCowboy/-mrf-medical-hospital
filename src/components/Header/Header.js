import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase.js';

const Header = () => {
   const {user, logOut} = useFirebase()
   console.log(user)

   return (

      <header class="p-3 bg-dark text-white">
         <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
               <img src="" alt="" />
            </Link>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
               <li><Link to="/home" className="nav-link px-2 text-secondary">Home</Link></li>
               <li><Link to="/login" className="nav-link px-2 text-secondary">Home</Link></li>
               <li><Link to="/signup" className="nav-link px-2 text-secondary">Home</Link></li>
            </ul>

            <div class="text-end">
               { !user && <div>
                  <Link to="/login"><button type="button" class="btn btn-outline-light me-2">Login</button></Link> 
                  <Link to="/signup"><button type="button" class="btn btn-warning">Sign-up</button></Link>
               </div>
               }

               {
                  user &&  <div className="d-flex justify-content-between align-items-center">
                     <img width="40px" className="rounded-circle" src={user.photoURL} alt="" />
                     <h5 className="mb-0 mx-3">{user.displayName}</h5>
                     <button onClick={logOut} type="button" class="btn btn-outline-info ms-3 btn-sm">Log out</button>
                  </div>
                  
               }
               
            </div>
            </div>
         </div>
      </header>

      // <div className="d-flex">
      //    <Link to="/home">Home</Link>
      //    <Link to="/login">Login</Link>
      //    <Link to="/Signup">Sign up</Link>
      //    {
      //    user &&  <div>
      //          <img src={user.photoURL} alt="" />
      //          <h3>{user.displayName}</h3>
      //       </div>
      //    }
      // </div>
   );
};

export default Header;