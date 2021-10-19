import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = props => {
   const {_id, picture, name, description} = props.prop
   console.log(props)
   return (
      <div className="col">
         <div className="card h-100">
            <div className="service-img-wrap">
               <img src={picture} className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
               <h4 className="card-title">{name}</h4>
               <p className="card-text">{description}</p>
            </div>
            <div className="card-footer pb-4">
               <Link to={`/serviceDetail/${_id}`} className="btn btn-primary">View details</Link>
            </div>
         </div>
      </div>
   );
};

export default Service;