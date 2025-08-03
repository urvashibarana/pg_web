import PGDetail from './PGDetail';

interface Props {
  params: {
    id: string;
  };
}

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

export default function Page({ params }: Props) {
  return <PGDetail pgId={params.id} />;
}
