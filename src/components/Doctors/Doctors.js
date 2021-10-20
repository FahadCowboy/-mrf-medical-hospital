import React from 'react';
import { useEffect, useState } from 'react';
import DoctorProfile from '../DoctorProfile/DoctorProfile';
import './Doctors.css'

const Doctors = () => {
   const [doctors, setDoctors] = useState()

   useEffect(() => {
      fetch('/hospital.json')
      .then(res => res.json())
      .then(data => {
         setDoctors(data[0].specialists)
         // console.log(serviceSingle)
         // setService(serviceSingle)
         // console.log(data[0].services)
      })
   }, [])
   useEffect(() => {
      setDoctors(doctors)
   }, [doctors])
   console.log(doctors)
   return (
      <div className="container mb-5">
         <h1 className="text-center py-5 fw-normal">Specialists we are connected with</h1>
         <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 services-wrapper">
            {
               doctors?.map(doctor => <DoctorProfile key={doctor._id} prop={doctor}></DoctorProfile>)
            }
         </div>
         
      </div>
   );
};

export default Doctors;