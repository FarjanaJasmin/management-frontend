import React from 'react';
import { Button, Popconfirm, Table,  } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
const columns = (onDelete)=> [
  {
    title: 'S_ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'f_name',
    key: 'f_name',
  },
  {
    title: 'Parents Name',
    dataIndex: 'p_name',
    key: 'p_name',
  },
  {
    title: 'Department',
    dataIndex: 'dept',
    key: 'dept',
  },
  {
    title: 'Semester',
    dataIndex: 'semester',
    key: 'semester',
  },
  {
    title: 'section',
    dataIndex: 'section',
    key: 'section',
  },
  {
    title: 'Date of birth',
    dataIndex: 'dob',
    key: 'dob',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Mobile No',
    dataIndex: 'mobile',
    key: 'mobile',
  },
  {
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
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Popconfirm
        title="Are you sure you want to delete this student?"
        onConfirm={() => onDelete(record._id)}
        okText="Yes"
        cancelText="No"
      >
        <Button type="link" danger>
          <DeleteOutlined/>
        </Button>
      </Popconfirm>
    ),
  }
];

const AllStudents = ({students, onDelete}) => {
  const data = students.map((student, index)=>({
    key: index,
    ...student,
  }));
  return <Table columns={columns(onDelete)} dataSource={data} />};
export default AllStudents;