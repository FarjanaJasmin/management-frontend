import React, { useState } from 'react'
import { Select, Table, Form, Button,  } from 'antd';


const columns = [
    {
      title: 'Class Time',
      dataIndex: 'c_time',
      key: 'c_time'
    },{
        title: 'Courses',
        dataIndex: 'courses',
        key: 'courses',
        render: courses =>
            courses.map((ct, index) => {
              const firstCourseCode = ct.courseCode.split('|')[0].trim();
              return (
                  <div key={index}>
                      {firstCourseCode}
                  </div>
              );
          })
      }
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

const FindCounsilHours = ({teachers}) => {

    const [form] = Form.useForm();
    const [formValues, setFormValues] = useState([]);
    const [teacherTime, setTeacherTime] = useState([]);

    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        console.log(values.teacher_name, values.days);
        setFormValues(values);
        if(values){
            fetch(`https://management-backend-new.vercel.app/counsiling?teacher=${values.teacher_name}&day=${values.days}`)
            .then(res=> res.json())
            .then(data=> {
                const formattedData = data.map((item, index)=>({
                    key: index,
                    c_time: Object.keys(item).filter(key=> key.includes("AM") || key.includes("PM")),
                    courses: Object.keys(item).filter(key=> key.includes("AM") || key.includes("PM")).map(time => ({
                        time: time, 
                        courseCode: item[time] 
                    }))
                }))
                setTeacherTime(formattedData);
            })
        }
    };

    const data  = teacherTime?.map((time, index)=>({
        key: index, 
        ...time,        
    }));

    return (
        <div className='pt-10'>
            <h1 className='text-center font-semibold text-2xl'>Teacher Schedule</h1>
            <div className='flex items-center flex-col gap-5 py-10 '>
                <div className='flex gap-5 w-full justify-center'>
                    <Form
                        form={form}
                        onFinish={(values) => {
                            onCreate(values);
                        }}
                        layout='horizontal'
                        className='flex gap-5 items-bottom'
                    >
                        <Form.Item
                            label="Teacher Name"
                            name="teacher_name"
                            rules={[{required: true, message: 'Please input teacher name'}]}

                        >
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select"
                                optionFilterProp="label"
                                options={teachers.map((teacher) => ({
                                    label: teacher.name,
                                    value: teacher.name
                                }))}
                            />
                        </Form.Item> 
                        <Form.Item 
                            name="days" 
                            label="Day"
                            rules={[{ required: true, message: 'Please select a day' }]}
                        >
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select"
                                optionFilterProp="label"
                                options={days.map((day) => ({
                                    label: day,
                                    value: day
                                }))}
                            />
                        </Form.Item>
                        <Form.Item className='mb-0'>
                            <Button type="primary" htmlType="submit">
                                Search
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <Table columns={columns} dataSource={data} className='md:w-1/2' />
            </div>
        </div>
    )
}

export default FindCounsilHours