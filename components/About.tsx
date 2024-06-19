import React from 'react';
import { PortableText, PortableTextBlock } from '@portabletext/react';

interface AboutSectionProps {
  title: string;
  content: PortableTextBlock[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, content }) => {
  return (
    <section>
      <h2>{title}</h2>
      <PortableText value={content} />
    </section>
  );
};

export default AboutSection;
