import * as React from 'react';
import Modal from '@mui/material/Modal';
import { motion } from 'framer-motion';

export default function InfoModal({ children, open, handleCloseModal }) {
  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={open ? 'visible' : 'hidden'}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#C61B0A',
          padding: '12px',
          boxShadow: 24,
          borderRadius: '8px',
          outline: 'none'
        }}
      >
        {children}
      </motion.div>
    </Modal>
  );
}
