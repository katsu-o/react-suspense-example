import * as React from 'react';
// import { Content } from '../components/Content';
// import { Content } from '../components/ContentWithRegistryCache';
import { Content } from '../components/ContentWithRepositryCache';

const { Suspense } = React;

interface IOwnProps {}

type Props = IOwnProps;

// 参考: React: Fetch API, React.Suspense e react-cache
// - https://medium.com/@oieduardorabelo/react-fetch-api-com-react-suspense-e-react-cache-16e8949e994

export const Playground = (props: Props) => {
  return (
    <div>
      <h1>Hello</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <Content id="puppy-1" />
        <Content id="puppy-1" />
      </Suspense>
    </div>
  );
};
