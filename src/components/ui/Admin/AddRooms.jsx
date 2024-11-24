import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 4,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 20,
      },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 20,
        offset: 4,
      },
    },
  };

const AddRooms = () => {
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };
    return (
        <div className='border border-gray-400 p-5 rounded'>
            <h1>Add New Rooms</h1>
            
            <Form
                name="dynamic_form_item"
                {...formItemLayoutWithOutLabel}
                onFinish={onFinish}
                style={{
                maxWidth: 600,
                }}
            >
                <Form.List
                name="names"

                >
                {(fields, { add, remove }, { errors }) => (
                    <>
                    {fields.map((field, index) => (
                        <Form.Item
                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                        required={false}
                        key={field.key}
                        >
                            <Form.Item
                                {...field}
                                validateTrigger={['onChange', 'onBlur']}
                                className='flex'
                                rules={[
                                {
                                    required: true,
                                    whitespace: true,
                                    message: "required",
                                },
                                ]}
                                noStyle
                            >
                                <Input
                                placeholder="Room Number"
                                style={{
                                    width: '100%',
                                }}
                                />
                            </Form.Item>
                        {fields.length > 1 ? (
                            <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                            />
                        ) : null}
                        </Form.Item>
                    ))}
                    <Form.Item>
                        <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{
                            width: '100%',
                        }}
                        icon={<PlusOutlined />}
                        >
                        Add field
                        </Button>
                        <Form.ErrorList errors={errors} />
                    </Form.Item>
                    </>
                )}
                </Form.List>
                <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default AddRooms;