import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #151718;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  text-align: left;
  position: fixed;
  height: 50%;
  top: 0px;
  left: 0;
  z-index: 22;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 650px) {
    width: 100%;
  }

  a {
    text-align: center;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
const StyledListItemView = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  margin: 0;
  padding: 0;
  align-items: center;
  list-style: none;
`;

const StyledLink = styled(Link)``;

const StyledListItem = styled.li`
  list-style: none;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  margin: 5px;
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  cursor: pointer;
`;
const StyledItemBar = styled.span`
  position: relative;
  display: block;
  margin-top: 5px;
  ::before,
  ::after {
    content: "";
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

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <StyledListItemView>
        <StyledListItem>
          <StyledLink
            onClick={() => setOpen(!open)}
            activeClass="active"
            to="aboutMe"
            spy={true}
            smooth={true}
            duration={1000}
            isDynamic={true}
            offset={-70}
          >
            About Me
            <StyledItemBar />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            onClick={() => setOpen(!open)}
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            isDynamic={true}
          >
            Skills
            <StyledItemBar />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            onClick={() => setOpen(!open)}
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            isDynamic={true}
          >
            Portfolio
            <StyledItemBar />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            onClick={() => setOpen(!open)}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            isDynamic={true}
          >
            Contact
            <StyledItemBar />
          </StyledLink>
        </StyledListItem>
      </StyledListItemView>
    </StyledMenu>
  );
};

export default Menu;
