// components/CooperativeSection.tsx
import React from 'react';
import { PortableText, PortableTextBlock } from '@portabletext/react';
import { Card, CardContent, Typography, Container } from '@mui/material';

interface CooperativeSectionProps {
  title: string;
  content: PortableTextBlock[];
}

const CooperativeSection: React.FC<CooperativeSectionProps> = ({
  title,
  content,
}) => {
  return (
    <Container
      maxWidth={false}
      className="max-w-7xl px-4 sm:px-6 lg:px-8 py-2 mt-10 mb-24"
    >
      <Card>
        <CardContent className=" m-0.5 bg-primary-dark/5">
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
                  <p className="text-xl px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pb-4 sm:pb-6">
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

export default CooperativeSection;
