import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <footer className="p-3 bg-dark text-white">
         <div className="d-flex flex-column align-items-center justify-content-center justify-content-lg-between text-white">
            <div>
               <Link to="/home" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
               <img src="" alt="" />
               </Link>
               <h3 className="text-color">MRF Medical College</h3>
            </div>
                  

            <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
               <li><Link to="/home" className="link-text-white nav-link px-2 text-secondary">Home</Link></li>
               <li><Link to="/doctors" className="link-text-white nav-link px-2 text-secondary">Doctors</Link></li>
               <li><Link to="/about" className="link-text-white nav-link px-2 text-secondary">About</Link></li>
            </ul>
            <p>This is hospital is private property opened for public.</p>
         </div>
      </footer>
      
   );
};

export default Footer;