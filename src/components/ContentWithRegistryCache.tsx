import * as React from 'react';
// import { unstable_createResource } from 'react-cache';
import { unstable_createResource } from '../stopgaps/react-cache';

interface IOwnProps {
  id: string;
}

type Props = IOwnProps;

const RegistryResource = unstable_createResource(() => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => data.message);
});

export const Content = (props: Props) => {
  const url = RegistryResource.read(props.id);
  console.log(url);
  return <img src={url} />;
};
