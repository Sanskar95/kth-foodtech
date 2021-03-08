import React from "react";
import styled from "styled-components";

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

  font-size: 16px;
  background-color: #ef0d33;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  z-index: 1;
  cursor: pointer;
  border-radius: 2px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-style: preserve-3d;
  visibility: ${({ visible }) => visible && "hidden"};
  opacity: ${({ visible }) => visible && "0"};
  transition: visibility 0s linear 0.2s, opacity 0.3s linear;
  margin-bottom: 10px;

  @media (max-width: 1000px) and (min-width: 651px) {
    font-size:  font-size: ${({ theme }) => theme.fontSize.xs};;
    height: 30px;
  }
  @media (max-width: 650px) {
    font-size:  font-size: ${({ theme }) => theme.fontSize.xs};
    height: 27px;
  }

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
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }
  :hover::after {
    transform: translateX(-100%);
    backface-visibility: hidden;
  }
`;
const CardButton = ({ children, onClick, visible }) => {
  return (
    <StyledButton onClick={onClick} visible={visible}>
      {children}
    </StyledButton>
  );
};

export default CardButton;
