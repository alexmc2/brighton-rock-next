// components/CooperativeSection.tsx
import React from 'react';
import { PortableText, PortableTextBlock } from '@portabletext/react';

interface CooperativeSectionProps {
  title: string;
  content: PortableTextBlock[];
}

const CooperativeSection: React.FC<CooperativeSectionProps> = ({
  title,
  content,
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <PortableText value={content} />
    </section>
  );
};

export default CooperativeSection;
