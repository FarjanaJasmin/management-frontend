import React from 'react';
import { Table } from 'antd';
import FindCounsilHours from './FindCounsilHours';
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },{
    title: 'Date of birth',
    dataIndex: 'dob',
    key: 'dob',
  },{
    title: 'Department',
    dataIndex: 'dept',
    key: 'dept',
  },{
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  }
];

const AllTeacher = ({teachers}) => {
  const data  = teachers.map((teacher, index)=>({
    key: index, 
    ...teacher,
    
  }));
  console.log(data);
  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <FindCounsilHours teachers={teachers}/>
    </div>)};
export default AllTeacher;