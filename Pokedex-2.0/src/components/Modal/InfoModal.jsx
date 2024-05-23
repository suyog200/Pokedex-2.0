import * as React from 'react';
import Modal from '@mui/material/Modal';
import { motion } from 'framer-motion';

export default function InfoModal({ children, open, handleCloseModal }) {
  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
    >
      <div>
        {children}
      </div>
    </Modal>
  );
}
