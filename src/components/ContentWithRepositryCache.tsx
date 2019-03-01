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

const RepositryResource = unstable_createResource((url: string) => {
  return new Promise((res, rej) => {
    const img = new Image();
    img.src = url;
    img.onload = res;
    img.onerror = rej;
  });
});

const Imagem = (props: { src: string }) => {
  const obj = RepositryResource.read(props.src);
  console.log(obj);
  return <img {...props} />;
};

export const Content = (props: Props) => {
  const url = RegistryResource.read(props.id);
  return <Imagem src={url} />;
};
