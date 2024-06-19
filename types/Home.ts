// types/Home.ts
import { PortableTextBlock } from '@portabletext/react';

export type HomePage = {
  _id: string;
  _createdAt: Date;
  title: string;
  description: string;
  aboutTitle: string;
  aboutContent: PortableTextBlock[];
  cooperativeTitle: string;
  cooperativeContent: PortableTextBlock[];
  galleryTitle: string;
  galleryImages: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  }[];
};
