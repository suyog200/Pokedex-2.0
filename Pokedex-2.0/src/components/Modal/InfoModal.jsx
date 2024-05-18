import * as React from 'react';
import Modal from '@mui/material/Modal';

export default function InfoModal({children, open, handleCloseModal}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        border= "none"
      >
          {children}
      </Modal>
    </div>
  );
}
