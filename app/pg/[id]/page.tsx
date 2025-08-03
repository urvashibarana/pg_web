import PGDetail from './PGDetail';
import { Metadata } from 'next';

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return ['1', '2', '3', '4', '5', '6'].map(id => ({ id }));
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `PG Listing ${params.id}`,
  };
}

export default function PGPage({ params }: Props) {
  return <PGDetail pgId={params.id} />;
}
