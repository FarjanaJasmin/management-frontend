import React from 'react';
import { Select, Table } from 'antd';
const columns = [
  {
    title: 'Day',
    dataIndex: 'day',
    key: 'day',
  },{
    title: '9:00 AM - 10:00 AM',
    dataIndex: '9:00 AM - 10:00 AM',
    key: '9:00 AM - 10:00 AM'
  },{
    title: '10:00 AM - 11:00 AM',
    dataIndex: '10:00 AM - 11:00 AM',
    key: '10:00 AM - 11:00 AM',
  },{
    title: '11:00 AM - 12:00 PM',
    dataIndex: '11:00 AM - 12:00 PM',
    key: '11:00 AM - 12:00 PM',
  },{
    title: '12:00 PM - 1:00 PM',
    dataIndex: '12:00 PM - 1:00 PM',
    key: '12:00 PM - 1:00 PM',
  }
];

const ViewRoutine = ({routine, days, courses, semesters, sections, setSec}) => {

const handleChange = (value) => {
  console.log(`selected ${value}`);
  setSec(value);
};

const data = days.map((day, index) => {
  const daySchedule = routine.filter((entry) => entry.day === day) || {};
  const combineSchedule = daySchedule.reduce((acc, schedule)=>{
    const {_id, day, ...rest} = schedule;
    return{...acc, ...rest};
  },{});
  
  return {
    key: index,
    day,
    ...combineSchedule,
  };
});

return (
  <>
      <div className='flex gap-2 py-10 items-center'>
        <span className='font-semibold'>Section</span>
        <Select
          style={{
              width: 120,
          }}
          onChange={handleChange}
          options={
              sections.map((sec) => ({
                  label: sec,
                  value: sec
              }))
          }
        />      
    </div>

    <Table columns={columns} dataSource={data} className='overflow-x-auto' />
    
    <table className='border border-collapse w-full md:w-3/4'>
      <thead>
        <tr className='border'>
          <th className='border p-2 w-1/4'>Course Code</th>
          <th className='border p-2 w-3/4'>Course Name</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index)=>(
          <tr key={index} className='border'>
              <td className='border p-2 w-1/4'>{course.courseCode}</td>
              <td className='border p-2 w-3/4'>{course.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
)};
export default ViewRoutine;