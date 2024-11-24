import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import AddNotice from './AddNotice';
import { key } from 'localforage';
import Preview from './Preview';
const columns = [
  {
    title: 'SL',
    dataIndex: 'sl',
    key: 'sl',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Preview',
    dataIndex: 'preview',
    key: 'preview',
  }
];

const Notice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(()=>{
    fetch("https://management-backend-new.vercel.app/notice")
    .then(res=> res.json())
    .then(data=> setNotices(data))
    .catch(err=> console.log(err))
  }, [])
  
  
  const handleNotices = (value) => {
    fetch("https://management-backend-new.vercel.app/notice",{
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

  // const handleNotices = (value) => {
  //   setNotices((prevNotices) => [...(Array.isArray(prevNotices) ? prevNotices : []), value]);
  // };

  const data = notices.map((notice, index)=>({
    key: index, 
    sl: index+1,
    ...notice,
    preview: <Preview notice={notice}/>
  }))
  return(
    <>
      <div className='text-end my-5'>
        <AddNotice handleNotices={handleNotices}/>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  )
};
export default Notice;