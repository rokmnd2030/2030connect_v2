import CardView from '@/components/CardView';
import Link from 'next/link';
import React from 'react';

export default function Page(): React.ReactNode {
  return (
    <>
      <Link href={'/detail'}>
        <CardView />
      </Link>


    </>
  );
}
