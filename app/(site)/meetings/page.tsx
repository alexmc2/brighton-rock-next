import React from 'react';
import MeetingsSection from '@/components/Meetings';
import Hero from '@/components/Hero';
import { sanityFetch } from '../../client-config';
import { SanityDocument } from 'next-sanity';

const MEETINGS_QUERY = `*[_type == "meetings"][0]{
  title,
  content
}`;

export default async function MeetingsPage() {
  const meetingsContent = await sanityFetch<SanityDocument>({
    query: MEETINGS_QUERY,
  });

  return (
    <div>
      <Hero title="Meeting Dates" />
      {meetingsContent ? (
        <MeetingsSection
          title={meetingsContent.title}
          content={meetingsContent.content}
        />
      ) : (
        <div>Error loading meetings content.</div>
      )}
    </div>
  );
}
