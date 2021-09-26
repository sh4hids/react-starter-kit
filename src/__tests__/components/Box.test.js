import React from 'react';
import { render } from '@testing-library/react';

import { Box } from '../../components';

test('renders box with text test', () => {
  const { getByText } = render(
    <Box>
      <p>test</p>
    </Box>
  );

  expect(getByText(/test/i)).toBeInTheDocument();
});
