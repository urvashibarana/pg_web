import { type Metadata } from 'next';
import PGDetail from './PGDetail';

// Explicitly define the param type to avoid type inference bugs
type PGPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return ['1', '2', '3', '4', '5', '6'].map((id) => ({ id }));
}

// Optional: if you're using metadata
export async function generateMetadata({ params }: PGPageProps): Promise<Metadata> {
  return {
    title: `PG #${params.id}`,
  };
}

export default function Page({ params }: PGPageProps) {
  return <PGDetail pgId={params.id} />;
}
