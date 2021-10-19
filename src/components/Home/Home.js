import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
   const [services] = useServices()
   console.log(useServices)
   return (
      <main className="">
         <div className="container">
            <div>
               <h1 className="text-center py-5 fw-normal">Welcome to MRF Medical Hospital</h1>
               <div>
                  <img className="w-100 rounded-pill banner" height="550px" src="https://www.stripes.com/theaters/asia_pacific/migrated.image.Image_76647001.jpg/alternates/LANDSCAPE_910/The%20Brian%20D.%20Allgood%20Army%20Community%20Hospital%20is%20sc" alt="" />
               </div>
            </div>

            <div className="mb-5">
               <h1 className="text-center py-5 fw-normal">Services we provide</h1>
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 services-wrapper">
                     {
                        services.map(service => <Service key={service._id} prop={service}></Service>)
                     }
                  </div>
            </div>
         </div>
      </main>
   );
};

export default Home;