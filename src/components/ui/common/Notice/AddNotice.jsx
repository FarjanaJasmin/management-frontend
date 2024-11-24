import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';
import TextArea from 'antd/es/input/TextArea';
const AddNotice = ({handleNotices}) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState();
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setFormValues(values);
    const formattedDate = new Date(Date.now()).toLocaleDateString({
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    const newNotice = {...values, date: formattedDate};
    handleNotices(newNotice);
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Notice
      </Button>
      <Modal
        open={open}
        title="Add new notice"
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
        <Form.Item name="title" label="Notice Title">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <TextArea/>
        </Form.Item>
      </Modal>
    </>
  );
};
export default AddNotice;