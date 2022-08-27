import { Modal } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

import { useActions } from '@/hooks/useActions';

type Props = {};

const ModalCustom = (props: Props) => {
  const modalState = useSelector<RootState, boolean>(
    (state) => state.modal.value,
  );
  const action = useActions();
  const handleCancel = () => {
    action.hide();
  };

  const handleOk = () => {
    action.hide();
  };
  return (
    <Modal
      title="Basic Modal"
      visible={modalState}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default ModalCustom;
