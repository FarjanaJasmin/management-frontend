import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Select } from 'antd';
const AddRoutine = ({depts, semesters, sections, courses, days, classTimes, rooms, setRoutine, getAvailableTimes}) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState();
  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [availableTimes, setAvailableTimes] = useState(classTimes);
  const [teachers, setTeachers] = useState([]);

  useEffect(()=>{
    fetch("https://management-backend-new.vercel.app/teacher?type=teacher")
    .then(res=> res.json())
    .then(data=> setTeachers(data))
    .catch(err=> console.log(err))
  }, [])

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setFormValues(values);  
    const courseDetail = `${values.course} | ${values.room} | ${values?.name?.split(' ').map((word) => word.charAt(0).toUpperCase()).join('') || "N/A"}`;
    const newRoutine = {teacherName: values.name, semester: values.semester, section: values.section, day:values.day, [values.time]: courseDetail };
    
    fetch("https://management-backend-new.vercel.app/routine",{
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(newRoutine),
    })
    .then(res=>{
      console.log(res);
      if(!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      return res.json()
    })
    .then(data => console.log(data))
    .catch(err => console.log("Error:", err))

    setOpen(false);
  };

  useEffect(() => {
    console.log("render this");
    if (selectedDay) {
      const times = getAvailableTimes(selectedDay);
      setAvailableTimes(times);
    } else {
      setAvailableTimes(classTimes); // Reset if no day is selected
    }
  }, [selectedDay, getAvailableTimes, classTimes]);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add New
      </Button>
      <Modal
        open={open}
        title="Add new class Schedule"
        okText="Create"
        cancelText="Cancel"
        okButtonProps={{
          autoFocus: true,
          htmlType: 'submit',
        }}
        onCancel={() => setOpen(false)}
        destroyOnClose
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={form}
            name="form_in_modal"
            initialValues={{
          
            }}
            clearOnDestroy
            onFinish={(values) => {
              onCreate(values);
            }}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item name="name" label="Name of Teacher">
          <Select
              showSearch
              placeholder="Select"
              optionFilterProp="label"
              options={teachers.map((teacher) => ({
                  label: teacher.name,
                  value: teacher.name
              }))}
          />
          
        </Form.Item>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-start'>
            <Form.Item name="dept" label="Department">
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select"
                    optionFilterProp="label"
                    options={depts.map((dept) => ({
                        label: dept,
                        value: dept
                    }))}
                />
            </Form.Item>
            <Form.Item 
              name="semester" 
              label="Semester"
              rules={[{ required: true, message: 'Please select semester' }]}
            >
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select"
                    optionFilterProp="label"
                    options={semesters.map((semester) => ({
                        label: semester,
                        value: semester
                    }))}
                  />
            </Form.Item>
            <Form.Item name="section" label="Section">
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select"
                    optionFilterProp="label"
                    options={sections.map((section) => ({
                        label: section,
                        value: section
                    }))}
                />
            </Form.Item>
            <Form.Item 
              name="course" 
              label="Course"
              rules={[{ required: true, message: 'Please select a course' }]}
            >
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select"
                    optionFilterProp="label"
                    options={courses.map((course) => ({
                        label: course.courseCode,
                        value: course.courseCode
                    }))}
                  />
            </Form.Item>
            <Form.Item 
              name="day" 
              label="Set Day"
              rules={[{ required: true, message: 'Please select day' }]}
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
                    onChange={(day) => setSelectedDay(day)}
                />
            </Form.Item>
            <Form.Item 
              name="time" 
              label="Class Time"
              rules={[{ required: true, message: 'Please select time' }]}
            >
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select"
                    optionFilterProp="label"
                    options={availableTimes.map((classTime) => ({
                        label: classTime,
                        value: classTime
                    }))}
                />
            </Form.Item>
            <Form.Item 
              name="room" 
              label="Available Rooms"
              rules={[{ required: true, message: 'Please select a room' }]}
              >
                <Select
                    required
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select"
                    optionFilterProp="label"
                    options={rooms.map((room) => ({
                        label: room,
                        value: room
                    }))}
                />
            </Form.Item>
            
        </div>

      </Modal>
    </>
  );
};
export default AddRoutine;