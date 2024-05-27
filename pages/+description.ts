import { PageContext } from 'vike/types';

const description = ({ data }: PageContext) => {
  const {
    name,
    species: { name: speciesName, url },
  } = data as { name: string; species: { name: string; url: string } };

  return `This is ${name}, a ${speciesName}. More info: ${url}`;
};

export default description;
