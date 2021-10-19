import { useEffect, useState } from "react";

const useServices = () => {
   const [services, setServices] = useState([])
   useEffect(() => {
      fetch('/hospital.json')
      .then(res => res.json())
      .then(data => {
         setServices(data[0].services)
         // console.log(data[0].services)
      })
   }, [])

   useEffect(() => {
      setServices(services)
   }, [])

   



   return [services]
}

export default useServices