import * as React from 'react';

interface IOwnProps {
  id: string;
}

interface IRecord {
  data: any;
  done: boolean;
  thenable: Promise<void> | null;
}

type Props = IOwnProps;

const cache = {};
export const Content = (props: Props) => {
  const it = cache[props.id];
  if (it && it.done) {
    return <img src={it.data} />;
  }
  if (it && !it.done) {
    throw it.thenable;
  }
  const record: IRecord = {
    data: null,
    done: false,
    thenable: null,
  };
  record.thenable = fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
      record.done = true;
      record.data = data.message;
    })
    .catch(err => {
      throw err;
    });
  cache[props.id] = record;
  throw record.thenable;
};
