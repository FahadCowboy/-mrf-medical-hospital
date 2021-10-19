import React from 'react';
import { Link } from 'react-router-dom';

const DoctorProfile = props => {
   const {picture, name, experience, specialist} = props.prop
   return (
      <div className="col">
         <div className="card h-100">
            <div className="service-img-wrap">
               <img src={picture} className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
               <h4 className="card-title">{name}</h4>
               <p className="card-text">Experienced on: '{specialist}'</p>
               <p className="card-text">Experience: {experience} years</p>
            </div>
            {/* <div className="card-footer pb-4">
               <Link to={`/serviceDetail/${_id}`} className="btn btn-primary">View details</Link>
            </div> */}
         </div>
      </div>
   );
};

export default DoctorProfile;