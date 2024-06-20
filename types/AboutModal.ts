// types/AboutModal.ts
import { PortableTextBlock } from '@portabletext/react';

export type AboutModal = {
  _id: string;
  _createdAt: Date;
  title: string;
  content: PortableTextBlock[];
};
