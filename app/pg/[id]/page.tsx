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

type PGPageProps = {
  params: {
    id: string;
  };
};

export default function PGPage({ params }: PGPageProps) {
  return <PGDetail pgId={params.id} />;
}
