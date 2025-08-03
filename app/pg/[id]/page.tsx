import PGDetail from './PGDetail';

export const dynamicParams = true;

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

export default function Page({ params }: { params: Record<string, string> }) {
  const pgId = params.id;
  return <PGDetail pgId={pgId} />;
}
