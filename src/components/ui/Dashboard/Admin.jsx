import React, { useEffect, useState } from 'react'
import Notice from '../common/Notice/Notice'



const Admin = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setNewstudents] = useState([]);

  useEffect(()=>{
    fetch("https://management-backend-new.vercel.app/teacher?type=teacher")
    .then(res=> res.json())
    .then(data=> setTeachers(data))
    .catch(err=> console.log(err))

    fetch("https://management-backend-new.vercel.app/student?type=student")
    .then(res=> res.json())
    .then(data=> setNewstudents(data))
    .catch(err=> console.log(err))
  }, [])

  return (
    <div className='grid md:grid-cols-3 justify-items-center gap-4'>
      <div className='w-full border border-gray-300 bg-gray-200 p-4 rounded'>
        <div className='font-medium text-2xl text-center'>
          <h1>Total Students</h1>
          <h1>{students?.length}</h1>
        </div>
      </div>
      <div className='w-full border border-gray-300 bg-gray-200 p-4 rounded'>
        <div className='font-medium text-2xl text-center'>
          <h1>Total Teachers</h1>
          <h1>{teachers?.length}</h1>
        </div>
      </div>
      <div className='w-full border border-gray-300 bg-gray-200 p-4 rounded'>
        <div className='font-medium text-2xl text-center'>
          <h1>Total Courses</h1>
          <h1>4</h1>
        </div>
      </div>
      <div className='w-full border border-gray-300 bg-gray-200 p-4 rounded col-span-3'>
        <h1 className='text-xl font-medium text-center mb-5'>Notice Board</h1>
        <Notice/>
      </div>
    </div>
  )
}

export default Admin
