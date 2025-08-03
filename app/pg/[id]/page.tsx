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

export default async function PGPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <PGDetail pgId={id} />;
}
