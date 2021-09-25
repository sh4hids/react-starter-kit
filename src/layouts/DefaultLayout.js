import React from 'react';
import PropTypes from 'prop-types';

import { Header, Container, SEO } from '../components';

const DefaultLayout = ({ children, title, description, url, image }) => (
  <>
    <SEO title={title} description={description} url={url} image={image} />
    <Header />
    <Container p={3} pt={76}>
      {children}
    </Container>
  </>
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
