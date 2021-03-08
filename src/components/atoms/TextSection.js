import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

const showTitle = keyframes`
 0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
const fadeInRotate = keyframes`
    0% {
        opacity: 0;
        transform: scale(0) rotate(360deg);
    }
100 % {
    opacity: 1;
    transform: scale(1) rotate(0deg);
}
`;
const bounce = keyframes`
 0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
`;
const StyledContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  height: 95px;
  bottom: 0;
`;
const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  position: absolute;
  letter-spacing: 4px;
  font-weight: 400;
  height: 100%;
  animation: ${showTitle} 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) 3.5s backwards;
  @media (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const StyledCircleBtn = styled.div`
  position: absolute;
  bottom: 5px;
  text-align: center;
  width: 40px;
  height: 40px;
  border: 2px solid white;
  justify-content: center;
  border-radius: 50%;
  transform: scale(1) rotate(0deg);
  display: flex;
  align-items: center;
  animation: ${fadeInRotate} 2s linear 4.5s backwards, ${bounce} 2s infinite;
`;
const StyledIconSpan = styled.span`
  animation: ${showTitle} 1.5s cubic-bezier(0.74, 0.06, 0.4, 0.92) 4s backwards;
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.l};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const TextSection = ({ id, name }) => {
  return (
    <StyledContent>
      <StyledTitle>{name}</StyledTitle>
      <StyledCircleBtn>
        <Link activeClass="active" to={id} spy={true} smooth={true} duration={1000} isDynamic={true} offset={-70}>
          <StyledIconSpan>
            <FontAwesomeIcon icon={faArrowDown} />
          </StyledIconSpan>
        </Link>
      </StyledCircleBtn>
    </StyledContent>
  );
};

export default TextSection;
