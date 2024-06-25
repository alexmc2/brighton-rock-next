'use client'

import React from 'react'
import {PortableText, PortableTextBlock} from '@portabletext/react'
import {Card, CardContent, Typography, Container} from '@mui/material'

interface ChibahSectionProps {
  title: string
  content: PortableTextBlock[]
}

const ChibahSection: React.FC<ChibahSectionProps> = ({title, content}) => {
  return (
    <Container maxWidth={false} className="max-w-7xl px-4 sm:px-6 lg:px-8  mb-10 md:mt-4 mt-2">
      <Card>
        <CardContent className=" bg-primary-dark/5">
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
                normal: ({children}) => (
                  <p className="text-xl px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pb-4 ">
                    {children}
                  </p>
                ),
              },
            }}
          />
        </CardContent>
      </Card>
    </Container>
  )
}

export default ChibahSection
