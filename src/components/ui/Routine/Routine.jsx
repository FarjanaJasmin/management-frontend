import React, { useEffect, useState } from 'react'
import AddRoutine from './AddRoutine';
import ViewRoutine from './viewRoutine';

const Routine = () => {
  const depts = ["CSE"];
  const semesters = ["1st"];
  const sections = ["A","B", "C"];
  const courses = [
    {
      name: "Machine Learning",
      courseCode: "CSE101"
    },
    {
      name: "Basic Computer",
      courseCode: "CSE102"
    },
    {
      name: "Image Processing",
      courseCode: "CSE103"
    },{
      name: "Signal Processing",
      courseCode: "CSE104"
    }
  ];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  const classTimes = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
  ]
  const rooms = ["101", "102", "103", "104", "105"];
  
  const [routine, setRoutine] = useState([]);
  const [sec, setSec] = useState([]);


  useEffect(()=>{
    if(sec){
      console.log(sec);
      fetch(`https://management-backend-new.vercel.app/routine?section=${sec}`)
      .then(res => res.json())
      .then(data => setRoutine(data))
      .catch(err => console.log(err))
    }
  }, [sec])


  const getAvailableTimes = (day) => {
    // Find the routine entry for the selected day
    const daySchedule = routine.find((entry) => entry.day === day);
    // If the day has a schedule, filter out the times that are already used
    if (daySchedule) {
      return classTimes.filter((time) => !daySchedule[time]);
    }
    // If no schedule exists for the day, all times are available
    return classTimes;
  };

  return (
    <div>
      <h1 className='text-4xl font-semibold text-center'>Routine</h1>
      <div className='py-5 text-end'>
        <AddRoutine 
          depts={depts} 
          semesters={semesters}
          sections = {sections}
          courses={courses} 
          days={days} 
          classTimes={classTimes} 
          rooms={rooms}
          setRoutine = {setRoutine}
          getAvailableTimes={getAvailableTimes}
        />
      </div>
      <ViewRoutine routine={routine} days={days} courses={courses} semesters={semesters} sections={sections} setSec={setSec}/>
    </div>
  )
}

export default Routine
