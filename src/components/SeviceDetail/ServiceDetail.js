import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import './ServiceDetail.css'

const ServiceDetail = () => {
   const {detailId} = useParams()
   const [service, setService] = useState('')

   useEffect(() => {
      fetch('/hospital.json')
      .then(res => res.json())
      .then(data => {
         console.log(data[0].services)
         const serviceSingle = data[0].services.find(service => service._id === detailId)
         console.log(serviceSingle)
         setService(serviceSingle)
         // console.log(data[0].services)
      })
   }, [])
   useEffect(() => {
      setService(service)
   }, [service])

   const {name, picture, phone, care, description, } = service
   console.log(name, picture, care)

   let i = 1
   
   return (
      <div className="container details-wrap my-5 d-flex justify-conten-center">
         <div className ="col">
            <div className="card">
               <div className="service-details-img-wrap">
                  <img src={picture} className="card-img-top" alt="..."/>
               </div>
               
               <div className="card-body py-4">
                  <h4 className="card-title">{name}</h4>
                  <p className="card-text">{description}</p>
                  <div>
                     <h6>Speciality:</h6>
                  {
                     care?.map(value => <p key={i++} className="card-text ms-3 mb-0">- {value}</p>)
                  }
                  </div>
                  <p className="card-text mt-3"><h6 className="d-inline">Contact:</h6> {phone}</p>
                  <div className="d-flex flex-end">
                     <Link to="/home" className="btn btn-danger ms-auto">Go back</Link>
                  </div>
                  
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServiceDetail;