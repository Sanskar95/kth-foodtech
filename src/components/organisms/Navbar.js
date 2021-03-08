import React, { useState, useRef, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled, { keyframes } from 'styled-components';
import myLogo from '../../assets/pictures/logo_red.webp';
import whiteLogo from '../../assets/pictures/myLogo.webp';

const showNavigation = keyframes`
  0% {
    transform: translateX(-100%);
    opacity:0;
  }
  50%{
      opacity:0;
  }
  100% {
    transform: translateX(0%);
    opacity:1;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 20;
  background-color: ${({ props }) => (props ? '#111517' : 'transparent')};
  transition: background 0.2s cubic-bezier(0.74, 0.06, 0.4, 0.92);
  height: 70px;
  text-align: center;
  animation: ${showNavigation} 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) 0.5s both;
  width: 100%;
`;

const StyledNavItem = styled.div`
  border: none;
  position: relative;
  margin: 10px;
  cursor: pointer;
`;
const StyledMainLogo = styled.div`
  background: url(${({ icon }) => icon});
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  opacity: 1;
  transition: opacity 0.3s ease-out;

  :hover {
    opacity: 0;
  }
`;
const StyledSecondLogo = styled(StyledMainLogo)`
  position: absolute;
  top: 0;
  opacity: 0;

  :hover {
    opacity: 1;
  }
`;

const StyledListItemView = styled.ul`
  display: flex;
  justify-content: space-around;
  position: relative;
  margin: 0;
  padding: 0;
  align-items: center;
  list-style: none;
  @media (max-width: 650px) {
    display: none;
  }
`;

const StyledLink = styled(Link)``;

const StyledListItem = styled.li`
  list-style: none;
  text-transform: uppercase;
  padding: 10px;
  display: flex;  
  flex-direction: column;
  margin: 15px;
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
  cursor: pointer;
  @media (max-width: 1000px) and (min-width: 650px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 10px;
  }
`;
const StyledItemBar = styled.span`
  position: relative;
  display: block;
  margin-top: 5px;
  ::before,
  ::after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${({ theme }) => theme.primary};
    transition: 0.2s ease all;
  }
  ::before {
    left: 50%;
  }
  ::after {
    right: 50%;
  }
  ${StyledListItem}:hover & {
    ::before {
      width: 50%;
    }
    ::after {
      width: 50%;
    }
  }
  ${StyledLink}.active & {
    ::before {
      width: 50%;
    }
    ::after {
      width: 50%;
    }
  }
`;

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY >= window.innerHeight - window.innerHeight / 2;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <StyledWrapper props={navBackground}>
      <StyledNavItem onClick={scrollToTop}>
      </StyledNavItem>
      <StyledListItemView>
        <StyledListItem>
          <StyledLink activeClass="active" to="aboutMe" spy={true} smooth={true} duration={1000} isDynamic={true} offset={-70}>
            Home
            <StyledItemBar />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink activeClass="active" to="skills" spy={true} smooth={true} duration={1000} isDynamic={true} offset={-70}>
            About
            <StyledItemBar />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink activeClass="active" to="portfolio" spy={true} smooth={true} duration={1000} isDynamic={true} offset={-70}>
            Events
            <StyledItemBar />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink activeClass="active" to="contact" spy={true} smooth={true} duration={1000} isDynamic={true} offset={-70}>
            More
            <StyledItemBar />
          </StyledLink>
        </StyledListItem>
      </StyledListItemView>
    </StyledWrapper>
  );
};

export default Navbar;
