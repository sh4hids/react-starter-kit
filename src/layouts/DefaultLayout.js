import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyles';
import { Header, Container, SEO } from '../components';

const DefaultLayout = ({ children, title, description, url, image }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO title={title} description={description} url={url} image={image} />
    <Header
    // colorMode={context.colorMode}
    // setColorMode={context.setColorMode}
    />
    <Container p={3} pt={76}>
      {children}
    </Container>
  </ThemeProvider>
);

DefaultLayout.defaultProps = {
  children: '',
  title: '',
  description: '',
  image: '',
  url: '',
};

DefaultLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};

export default DefaultLayout;
