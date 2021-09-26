import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { baseTheme as theme } from '../../styles/themes';
import { BrandLogo } from '../../components';

test('renders box with text test', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <BrandLogo href="/hackerman">HackerMan</BrandLogo>
    </ThemeProvider>
  );

  const brandLogoElement = screen.getByText(/HackerMan/i);

  expect(getByText(/HackerMan/i)).toBeInTheDocument();

  expect(brandLogoElement).toHaveAttribute('href', '/hackerman');
});
