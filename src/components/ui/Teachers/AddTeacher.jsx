import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
const AddTeacher = ({handleTeachers}) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState();
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setFormValues(values);
    const TId = `T${Math.floor(1000+Math.random()*9000)}`;
    const newTeacher = {...values, id: TId, role: "teacher"};
    handleTeachers(newTeacher);
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Teacher
      </Button>
      <Modal
        open={open}
        title="Add new teacher"
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
        <Form.Item name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="dob" label="Date of birth">
          <Input/>
        </Form.Item>
        <Form.Item name="dept" label="Department">
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
              {
                value: 'cse',
                label: 'CSE',
              },
              {
                value: 'eee',
                label: 'EEE',
              },
              {
                value: 'english',
                label: 'English',
              }
            ]}
          />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input type="email" />
        </Form.Item>
        <Form.Item name="address" label="Address">
          <TextArea/>
        </Form.Item>
        <Form.Item name="gender" label="Gender" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>
      </Modal>
    </>
  );
};
export default AddTeacher;