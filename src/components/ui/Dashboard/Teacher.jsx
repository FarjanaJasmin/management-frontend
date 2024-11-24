import React, { useEffect, useState } from 'react'
import AllTeacher from '../Teachers/AllTeacher'
import AddTeacher from '../Teachers/AddTeacher'

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(()=>{
    fetch("https://management-backend-new.vercel.app/teacher?type=teacher")
    .then(res=> res.json())
    .then(data=> setTeachers(data))
    .catch(err=> console.log(err))
  }, [])
  
  
  const handleTeachers = (value) => {
    fetch("https://management-backend-new.vercel.app/teacher",{
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(value)
    })
    .then((res)=>res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

  };

  return (
    <div className='overflow-auto md:overflow-none'>
      <div className='text-end my-10'>
        <AddTeacher handleTeachers={handleTeachers}/>
      </div>
      <AllTeacher teachers={teachers}/>
    </div>
  )
}

export default Teacher
