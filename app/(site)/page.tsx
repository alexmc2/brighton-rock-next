// pages/index.tsx
import React from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/About';
import CooperativeSection from '@/components/CooperativeSection';
import Gallery from '@/components/Gallery';
import Carousel from '@/components/Carousel';
import { sanityFetch } from '../client-config';
import { SanityDocument } from 'next-sanity';

const HOME_QUERY = `*[_type == "home"][0]{
  aboutTitle,
  aboutContent,
  cooperativeTitle,
  cooperativeContent,
  galleryTitle,
  galleryImages
}`;

export default async function HomePage() {
  const homePageContent = await sanityFetch<SanityDocument>({
    query: HOME_QUERY,
  });
  console.log('Home Page Content:', homePageContent);

  return (
    <div>
      <Hero
        title="Welcome to Brighton Rock"
        description="A small housing co-op established in 1987, located in West Hove"
        showLogo={true}
      />
      {homePageContent ? (
        <>
          <AboutSection
            title={homePageContent.aboutTitle}
            content={homePageContent.aboutContent}
          />
          <CooperativeSection
            title={homePageContent.cooperativeTitle}
            content={homePageContent.cooperativeContent}
          />
          <Gallery images={homePageContent.galleryImages}>
            {(carouselImages) => (
              <Carousel
                title={homePageContent.galleryTitle}
                images={carouselImages}
              />
            )}
          </Gallery>
        </>
      ) : (
        <div>Error loading home page content.</div>
      )}
    </div>
  );
}
