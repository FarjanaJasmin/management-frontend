import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
const AdmitStudent = ({handleStudents}) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState();
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setFormValues(values);
    const SId = `S${Math.floor(1000+Math.random()*9000)}`;
    const newStudent = {...values, id: SId, role: "student"};
    handleStudents(newStudent);
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Add Student
      </Button>
      <Modal
        open={open}
        title="Admit new Student"
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
            initialValues={{}}
            clearOnDestroy
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item name="f_name" label="Full Name">
          <Input />
        </Form.Item>
        <Form.Item name="p_name" label="Parents Name">
          <Input />
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
        <Form.Item name="semester" label="Semester">
          <Input />
        </Form.Item>
        <Form.Item name="section" label="section">
          <Input />
        </Form.Item>
        <Form.Item name="dob" label="Date of Birth">
          <Input />
        </Form.Item>
        <Form.Item name="mobile" label="Mobile No">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
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
export default AdmitStudent;