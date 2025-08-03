import { Metadata } from 'next';
import PGDetail from './PGDetail';

interface PGPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

export async function generateMetadata({ params }: PGPageProps): Promise<Metadata> {
  return {
    title: `PG ${params.id} Details`,
  };
}

export default async function PGPage({ params }: PGPageProps) {
  return <PGDetail pgId={params.id} />;
}
