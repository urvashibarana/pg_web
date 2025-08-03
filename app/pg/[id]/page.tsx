import PGDetail from './PGDetail';

export async function generateStaticParams() {
  return ['1', '2', '3', '4', '5', '6'].map(id => ({ id }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <PGDetail pgId={params.id} />;
}
