import React from 'react';

import { Text } from '../components';
import { DefaultLayout } from '../layouts';

export default function HomePage() {
  return (
    <DefaultLayout title="Home">
      <Text variant="h1">This is home page</Text>
    </DefaultLayout>
  );
}
