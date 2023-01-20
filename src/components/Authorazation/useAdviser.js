import React, { useEffect, useState } from 'react';

const useAdviser = (user) => {
      const [adviser , setadviser] = useState(false)
      const [adviserLoading , setadviserLoading] = useState(true)
      useEffect(()=>{
            const email = user?.email
            if(email){
                  fetch(`http://localhost:5000/api/v1/user/chackAdviser/${email}` , {
                        method: "GET",
                        headers:{
                              "authorization": `Bearer ${localStorage.getItem('Token')}`
                        }
                  })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        setadviser(data.adviser)
                        setadviserLoading(false)
                  })
            }

      },[user])



      return [adviser , adviserLoading]
};

export default useAdviser;