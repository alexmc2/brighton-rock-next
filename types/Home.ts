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
    _type: string;
    _key: string;
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  }[];
};
