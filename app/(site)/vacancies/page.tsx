import React from 'react';
import VacanciesSection from '@/components/Vacancies';
import Hero from '@/components/Hero';
import { sanityFetch } from '../../client-config';
import { SanityDocument } from 'next-sanity';

const VACANCIES_QUERY = `*[_type == "vacancies"][0]{
  title,
  content
}`;

const VACANCIES_MODAL_QUERY = `*[_type == "vacanciesModal"][0]{
  modalTitle,
  modalContent
}`;

export default async function VacanciesPage() {
  const vacanciesContent = await sanityFetch<SanityDocument>({
    query: VACANCIES_QUERY,
  });

  const vacanciesModalContent = await sanityFetch<SanityDocument>({
    query: VACANCIES_MODAL_QUERY,
  });

  return (
    <div>
      <Hero title="Vacancies" />
      {vacanciesContent && vacanciesModalContent ? (
        <VacanciesSection
          title={vacanciesContent.title}
          content={vacanciesContent.content}
          modalTitle={vacanciesModalContent.modalTitle}
          modalContent={vacanciesModalContent.modalContent}
        />
      ) : (
        <div>Error loading vacancies content.</div>
      )}
    </div>
  );
}
