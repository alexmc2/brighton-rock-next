// components/Gallery.tsx
import React from 'react';
import { urlFor } from '../app/client-config';

interface GalleryImage {
  _type: string;
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

interface GalleryProps {
  images?: GalleryImage[];
  children: (
    carouselImages: { url: string; alt?: string }[]
  ) => React.ReactNode;
}

const Gallery: React.FC<GalleryProps> = ({ images, children }) => {
  const carouselImages = images?.map((image) => ({
    url: urlFor(image.asset)?.width(500).height(300).url() || '',
    alt: image.alt || '',
    width: 500,
    height: 300,
  }));

  return <>{children(carouselImages || [])}</>;
};

export default Gallery;
