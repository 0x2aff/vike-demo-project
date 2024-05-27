import { useData } from 'vike-react/useData';

function Page() {
  const data = useData<unknown>();
  return <>{JSON.stringify(data)}</>;
}

export default Page;
