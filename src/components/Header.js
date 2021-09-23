import React, { useState } from 'react';
import styled from 'styled-components';

import Container from './Container';
import Box from './Box';
import BrandLogo from './BrandLogo';
import HeaderMenu from './HeaderMenu';
import MenuIcon from './MenuIcon';

const Wrapper = styled.div`
  height: 60px;
  background-color: var(--color-bg-1);
  color: var(--color-text-0);
  position: fixed;
  width: 100%;
  z-index: 999;
  box-shadow: ${({ theme }) => theme.elevations[0]};
`;

const HeaderContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  .theme-toggle-btn,
  .menu-toggle-btn {
    cursor: pointer;
    margin-left: ${({ theme }) => theme.space.xl}px;
    svg {
      position: relative;
    }
  }
  ${({ theme }) => `${theme.mediaQueries.sm} {
    .theme-toggle-btn {
      svg {
        top: 6px;
      }
    }
    .menu-toggle-btn {
      display: none;
    }
  }`};
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <HeaderContainer p={3}>
        <BrandLogo href="/">TMDB</BrandLogo>
        <Box display="flex">
          <HeaderMenu isMenuOpen={isMenuOpen} />
          <span
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
            className="menu-toggle-btn"
            aria-label="menu-button"
          >
            <MenuIcon />
          </span>
        </Box>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
