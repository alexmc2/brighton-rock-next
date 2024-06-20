import React from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/About';
import CooperativeSection from '@/components/CooperativeSection';
import ChibahSection from '@/components/ChibahSection';
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
  galleryImages,
  chibahTitle,
  chibahContent
}`;

const ABOUT_MODAL_QUERY = `*[_type == "aboutModal"][0]{
  title,
  content
}`;

const COOPERATIVE_MODAL_QUERY = `*[_type == "cooperativeModal"][0]{
  title,
  content
}`;

export default async function HomePage() {
  const homePageContent = await sanityFetch<SanityDocument>({
    query: HOME_QUERY,
  });

  const aboutModalContent = await sanityFetch<SanityDocument>({
    query: ABOUT_MODAL_QUERY,
  });

  const cooperativeModalContent = await sanityFetch<SanityDocument>({
    query: COOPERATIVE_MODAL_QUERY,
  });

  return (
    <div>
      <Hero
        title="Welcome to Brighton Rock"
        description="A small housing co-op established in 1987, located in West Hove"
        showLogo={true}
      />
      {homePageContent && aboutModalContent && cooperativeModalContent ? (
        <>
          <AboutSection
            title={homePageContent.aboutTitle}
            content={homePageContent.aboutContent}
            modalTitle={aboutModalContent.title}
            modalContent={aboutModalContent.content}
          />

          <Gallery images={homePageContent.galleryImages}>
            {(carouselImages) => (
              <Carousel
                title={homePageContent.galleryTitle}
                images={carouselImages}
              />
            )}
          </Gallery>

          <CooperativeSection
            title={homePageContent.cooperativeTitle}
            content={homePageContent.cooperativeContent}
            modalTitle={cooperativeModalContent.title}
            modalContent={cooperativeModalContent.content}
          />
          
          <ChibahSection
            title={homePageContent.chibahTitle}
            content={homePageContent.chibahContent}
          />
        </>
      ) : (
        <div>Error loading home page content.</div>
      )}
    </div>
  );
}
