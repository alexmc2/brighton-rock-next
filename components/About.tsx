'use client';

import React, { useState } from 'react';
import { PortableText, PortableTextBlock } from '@portabletext/react';
import {
  Card,
  CardContent,
  Typography,
  Container,
  Button,
  Modal,
} from '@mui/material';

interface AboutSectionProps {
  title: string;
  content: PortableTextBlock[];
  modalTitle: string;
  modalContent: PortableTextBlock[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  content,
  modalTitle,
  modalContent,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container
      maxWidth={false}
      className="max-w-7xl px-4 sm:px-6 lg:px-8 py-2 mt-10 "
    >
      <Card>
        <CardContent className="bg-primary-dark/5">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-6"
          >
            {title}
          </Typography>
          <PortableText
            value={content}
            components={{
              block: {
                normal: ({ children }) => (
                  <p className="text-xl px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pb-4 sm:pb-4">
                    {children}
                  </p>
                ),
              },
            }}
          />
          <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pb-4">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleOpen}
            >
              More About Us
            </Button>
          </div>
        </CardContent>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <div
          className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={handleClose}
        >
          <div
            className="bg-white border-2 border-black shadow-lg p-8 max-w-4xl w-full h-auto overflow-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 id="modal-modal-title" className="text-3xl font-bold mb-4">
              {modalTitle}
            </h4>
            <PortableText
              value={modalContent}
              components={{
                block: {
                  normal: ({ children }) => (
                    <div className="text-2xl mt-4 mb-6 leading-relaxed">
                      {children}
                    </div>
                  ),
                },
              }}
            />
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default AboutSection;
