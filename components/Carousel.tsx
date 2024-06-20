// components/Carousel.tsx
'use client';

import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card, CardContent, Container, Typography } from '@mui/material';
import Image from 'next/image';

interface CarouselImage {
  url: string;
  alt?: string;
  width: number;
  height: number;
}

interface CarouselProps {
  title: string;
  images: CarouselImage[];
}

const Carousel: React.FC<CarouselProps> = ({ title, images }) => {
  return (
    <Container
      maxWidth={false}
      className="max-w-7xl px-4 sm:px-6 lg:px-8 py-2 mt-10 mb-10"
    >
      <Card>
        <CardContent className="m-0.5 bg-primary-dark/5">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-6"
          >
            {title}
          </Typography>
          <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
            <ReactCarousel
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={4000}
              infiniteLoop={true}
            >
              {images.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image.url}
                    alt={image.alt || ''}
                    width={image.width}
                    height={image.height}
                  />
                </div>
              ))}
            </ReactCarousel>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};


export default Carousel;
