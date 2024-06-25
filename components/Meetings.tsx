'use client';

import React from 'react';
import { PortableText, PortableTextBlock } from '@portabletext/react';
import { Card, CardContent, Typography, Container } from '@mui/material';

interface MeetingsSectionProps {
  title: string;
  content: PortableTextBlock[];
}

const MeetingsSection: React.FC<MeetingsSectionProps> = ({
  title,
  content,
}) => {
  return (
    <Container
      maxWidth={false}
      className="max-w-7xl px-4 sm:px-6 lg:px-8 py-2 mt-10 mb-10"
    >
      <Card>
        <CardContent className=" bg-primary-dark/5">
          <Typography
            variant="h5"
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
        </CardContent>
      </Card>
    </Container>
  );
};


export default MeetingsSection;
