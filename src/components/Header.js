import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from './ThemeProvider';
import Container from './Container';
import Box from './Box';
import BrandLogo from './BrandLogo';
import HeaderMenu from './HeaderMenu';
import MenuIcon from './MenuIcon';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

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
        top: 10px;
      }
    }
    .menu-toggle-btn {
      display: none;
    }
  }`};
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const context = useContext(ThemeContext);

  return (
    <Wrapper>
      <HeaderContainer p={3}>
        <BrandLogo href="/">React Kit</BrandLogo>
        <Box display="flex">
          <HeaderMenu isMenuOpen={isMenuOpen} />
          <span
            onClick={() => {
              context.setColorMode(
                context.colorMode === 'dark' ? 'light' : 'dark'
              );
            }}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
            className="theme-toggle-btn"
            aria-label="theme-toggle-button"
          >
            {context.colorMode ? (
              <>{context.colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</>
            ) : (
              <Box width={24} height={24} />
            )}
          </span>
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
