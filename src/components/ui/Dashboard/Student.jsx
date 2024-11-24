import React, { useEffect, useState } from 'react'
import AllStudents from '../Students/AllStudents'
import AdmitStudent from '../Students/AdmitStudent'

const Student = () => {
  const [students, setNewstudents] = useState([]);
  
  useEffect(()=>{
    fetch("https://management-backend-new.vercel.app/student?type=student")
    .then(res=> res.json())
    .then(data=> setNewstudents(data))
    .catch(err=> console.log(err))
  }, [])
  
  
  const handleStudents = (value) => {
    fetch("https://management-backend-new.vercel.app/student?type=student",{
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

  const handleDelete = (id)=>{
    fetch(`https://management-backend-new.vercel.app/student/${id}`,{
      method: "DELETE",
      headers: {
        'content-type': "application/json"
      },
    })
    .then((res)=>res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount === 1){
        alert("Delete Successful");
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <div className='text-end my-10'>
        <AdmitStudent handleStudents={handleStudents}/>
      </div>
      <AllStudents students={students} onDelete={handleDelete}/>
    </div>
  )
}

export default Student
