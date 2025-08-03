import PGDetail from './PGDetail';

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

// ✅ Define props interface explicitly
interface PageProps {
  params: {
    id: string;
  };
}

export default function PGPage({ params }: PageProps) {
  return <PGDetail pgId={params.id} />;
}
