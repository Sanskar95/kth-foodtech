import React from 'react';
import styled, { keyframes } from 'styled-components';
import background from '../assets/pictures/pots-vegetables-harvest.jpg';
import TextSection from '../components/atoms/TextSection';

const mainBlock = keyframes`
  0% {    
  transform-origin: left;
    transform: scaleX(0);
  }
  49%{
    transform-origin: left; 
  }
  50% {
    transform: scaleX(1);
    transform-origin: right;
  }
  100% {
    transform-origin: right;
    transform: scaleX(0);
  }
`;
const mainFadeIn = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const popIn = keyframes`
  0% {
    width: 0px;
    height: 0px;
    background: white;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: white;
    opacity: 1;
    bottom: 45px;
  }
  65% {
    width: 7px;
    height: 7px;
    bottom: 0px;
    width: 15px;
  }
  80% {
    width: 10px;
    height: 10px;
    bottom: 20px;
  }
  100% {
    width: 7px;
    height: 7px;
    background: white;
    border: 0px solid #222;
    bottom: 15px;
  }
`;
const secFadeIn = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${({ icon }) => icon}) no-repeat center fixed;
  background-size: cover;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledBox = styled.div`
  @media (min-width: 1000px) {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translate(0%, -50%);
  }

  @media (max-width: 1000px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;
const StyledTitle = styled.div`
  width: fit-content;
  position: relative;
  height: 100px;
  @media (max-width: 1000px) {
    display: flex;
    align-items: baseline;
  }
`;
const StyledFirstBlock = styled.span`
  width: 100%;
  height: inherit;
  background: ${({ theme }) => theme.primary};
  position: absolute;
  animation: ${mainBlock} 2s 1s cubic-bezier(0.74, 0.06, 0.4, 0.92) both;
`;
const StyledNameTitle = styled.h1`
  font-family: 'Poppins';
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  -webkit-animation: ${mainFadeIn} 2s forwards;
  -o-animation: ${mainFadeIn} 2s forwards;
  animation: ${mainFadeIn} 2s forwards;
  animation-delay: 2.6s;
  opacity: 0;
  display: flex;
  align-items: baseline;
  position: relative;
  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media (max-width: 400px) {
    font-size: 40px;
  }
`;
const StyledAfterTitle = styled.span`
  width: 0px;
  height: 0px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background: white;
  -webkit-animation: load 1.6s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation: ${popIn} 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation-delay: 3s;
  margin-left: 5px;
  margin-top: -10px;
  position: absolute;
  bottom: 13px;
  right: -12px;
`;
const StyledRole = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  @media (max-width: 1000px) {
    width: fit-content;
    height: fit-content;
    text-align: center;
  }
`;
const StyledSecondBlock = styled.div`
  width: 0%;
  height: inherit;
  background: ${({ theme }) => theme.secondary};
  position: absolute;
  animation-delay: 1s;
  display: flex;
`;
const StyledPositionTitle = styled.p`
  animation: ${secFadeIn} 2s forwards;
  animation-delay: 4.2s;
  opacity: 0;
  font-family: 'Lato';
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.l};
  text-transform: uppercase;
  letter-spacing: 5px;
  text-align: start;
  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    text-align: center;
  }
  @media (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const LandingPage = () => {
  return (
    <StyledWrapper icon={background}>
      <StyledBox>
        <StyledTitle>
          <StyledFirstBlock />
          <StyledNameTitle>
           KTH FoodTech
            <StyledAfterTitle />
          </StyledNameTitle>
        </StyledTitle>
        {/*<StyledRole>*/}
        {/*  <StyledSecondBlock />*/}
        {/*  <StyledPositionTitle>Junior Front-end Developer</StyledPositionTitle>*/}
        {/*</StyledRole>*/}
      </StyledBox>
      {/*<TextSection id="aboutMe" name="About Me" />*/}
    </StyledWrapper>
  );
};

export default LandingPage;
