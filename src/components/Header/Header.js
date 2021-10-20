import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
   const {loginUser, logOut} = useAuth()
   console.log(loginUser)

   return (

      <header className="p-3 bg-dark text-white">
         <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between text-white">
               <div>
                  <Link to="/home" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                  <img className="logo" src="https://ik.imagekit.io/xqucpzloy5c/Octagon-logo-2_Hefz5yBOjxD.jpg" alt="" />
                  <h3 className="text-color">MRF Medical College</h3>
                  </Link>
               </div>
               

               <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
                  <li><Link to="/home" className="link-text-white nav-link px-2 text-secondary">Home</Link></li>
                  <li><Link to="/doctors" className="link-text-white nav-link px-2 text-secondary">Doctors</Link></li>
                  <li><Link to="/about" className="link-text-white nav-link px-2 text-secondary">About</Link></li>
               </ul>

               <div className="text-end">
                  { !loginUser && <div>
                     <Link to="/login"><button type="button" className="link-text-white btn btn-outline-light me-2">Login</button></Link> 
                     <Link to="/signup"><button type="button" className="link-text-white btn btn-warning">Sign-up</button></Link>
                  </div>
                  }

                  {
                     loginUser &&  <div className="d-flex justify-content-between align-items-center">
                        <img width="40px" className="rounded-circle" src={loginUser.photoURL} alt="" />
                        <div className="mx-3 d-flex flex-column align-items-start">
                           <h6 className="mb-0">{loginUser.displayName}</h6>
                           <p className="email-pragraph mb-0 text-warning">{loginUser.email}</p>
                        </div>
                        
                        <button onClick={logOut} type="button" className="btn btn-outline-info ms-3 btn-sm">Log out</button>
                     </div>
                  }
                  
               </div>
            </div>
         </div>
























         {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <div className="container-fluid">
      <Link to="/home" className="navbar-brand">
         <img className="logo" src="https://ik.imagekit.io/xqucpzloy5c/Octagon-logo-2_Hefz5yBOjxD.jpg" alt="" />
         <h3 className="text-color">MRF Medical College</h3>
      </Link>
      <button className="naler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
          <ul className="navbar-nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item"><Link to="/home" className="nav-link link-text-white nav-link px-2 text-secondary">Home</Link></li>
            <li className="nav-item"><Link to="/doctors" className="nav-link link-text-white nav-link px-2 text-secondary">Doctors</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link link-text-white nav-link px-2 text-secondary">About</Link></li>
         </ul>
        

      <div className="text-end">
         { !loginUser && <div>
            <Link to="/login"><button type="button" className="link-text-white btn btn-outline-light me-2">Login</button></Link> 
            <Link to="/signup"><button type="button" className="link-text-white btn btn-warning">Sign-up</button></Link>
         </div>
         }

         {
            loginUser &&  <div className="d-flex justify-content-between align-items-center">
               <img width="40px" className="rounded-circle" src={loginUser.photoURL} alt="" />
               <div className="mx-3 d-flex flex-column align-items-start">
                  <h6 className="mb-0">{loginUser.displayName}</h6>
                  <p className="email-pragraph mb-0 text-warning">{loginUser.email}</p>
               </div>
               
               <button onClick={logOut} type="button" className="btn btn-outline-info ms-3 btn-sm">Log out</button>
            </div>
         }
         
      </div>
    </div>
  </div>
</nav> */}





</header>












   );
};

export default Header;