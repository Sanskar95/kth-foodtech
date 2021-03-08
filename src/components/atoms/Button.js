import React from 'react';
import styled from 'styled-components';
import 'aos/dist/aos.css';

const StyledButton = styled.button`
  height: 40px;
  position: relative;
  overflow: hidden;
  display: block;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  border: 2px solid transparent;
  border-radius: 2px;
  transition: background-color 0.3s;
  width: 170px;
  font-size: 16px;
  background-color: #ef0d33;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  z-index: 1;
  cursor: pointer;
  border-radius: 2px;
  margin: 20px 0;

  ::after {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #d20b2d;
    top: 0;
    right: -100%;
    transition: transform 0.5s ease-out;
    will-change: transform;
  }
  :hover::after {
    transform: translateX(-100%);
  }
`;
const Button = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick} data-aos="fade-right" data-aos-duration="1500" data-aos-offset="70">
      {children}
    </StyledButton>
  );
};

export default Button;
