// app/pg/[id]/page.tsx

import { PageProps } from 'next';
import PGDetail from './PGDetail';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

export default function Page({ params }: PageProps) {
  return <PGDetail pgId={params.id} />;
}
