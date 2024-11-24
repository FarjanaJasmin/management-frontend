import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const Preview = ({notice}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Preview
      </Button>
      <Modal title="Show notice" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {notice.description}
      </Modal>
    </>
  );
};

export default Preview;