import React from 'react';
import Image from 'next/image';

// components/Gallery.tsx
interface GalleryImage {
  asset: {
    _id: string;
    url: string;
  };
  alt: string;
}

interface GalleryProps {
  title: string;
  images?: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ title, images }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>
        {images?.map((image) => (
          <Image
            key={image.asset._id}
            src={image.asset.url}
            alt={image.alt}
            width={500} // replace with your desired width
            height={300} // replace with your desired height
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
