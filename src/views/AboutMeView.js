import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { Link } from "react-scroll";
import image from "../assets/pictures/moje.webp";

import "aos/dist/aos.css";
import zdj1 from "../assets/pictures/zdj11.webp";
import zdj2 from "../assets/pictures/zdj22.webp";
import zdj3 from "../assets/pictures/zdj33.webp";
import CardButton from "../components/atoms/CardButton";

const showText = keyframes`
 0% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const typing = keyframes`
  0% { width: 0; opacity:1; }
  100% {  width: 25ch; opacity:1;}
`;
const blinkCaret = keyframes`
  0%, 100% { border-color: transparent }
  50% { border-color: #ef0d33; }
`;
const typing2 = keyframes`
  0% { width: 0; opacity:1; }
  100% {  width: 27ch; opacity:1;}
`;
const typing3 = keyframes`
  0% { width: 0; opacity:1; }
  100% {  width: 28ch; opacity:1;}
`;

const sdb07 = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StyledWrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.secondary};
  margin: 25px 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;
const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  flex-wrap: wrap;
`;
const StyledLeftContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1500px) and (min-width: 651px) {
    width: 200px;
    height: 300px;
  }
  @media (max-width: 650px) {
    width: 150px;
  }
`;
const StyledTitle = styled.h2`
  height: 35px;
  width: 0;
  margin: 15px auto;
  overflow: hidden;
  position: relative;
  color: ${({ theme }) => theme.ternary};
  font-size: ${({ theme }) => theme.fontSize.l};
  text-transform: uppercase;
  letter-spacing: 3px;
  border-right: 0.15em solid ${({ theme }) => theme.primary};
  opacity: 0;
  white-space: nowrap;

  ${(props) =>
    props.secondary &&
    css`
      animation: ${typing} 2s steps(30, end) forwards,
        ${blinkCaret} 0.75s step-end infinite;
      animation-delay: 1s;
    `};
  @media (max-width: 1000px) and (min-width: 651px) {
    font-size: 18px;
    height: 25px;
    ${(props) =>
      props.secondary &&
      css`
        animation: ${typing2} 2s steps(30, end) forwards,
          ${blinkCaret} 0.75s step-end infinite;
        animation-delay: 1s;
      `};
  }
  @media (max-width: 650px) {
    height: 22px;
    font-size: 16px;
    ${(props) =>
      props.secondary &&
      css`
        animation: ${typing3} 2s steps(30, end) forwards,
          ${blinkCaret} 0.75s step-end infinite;
        animation-delay: 1s;
      `};
  }
`;
const StyledPhotoBorder = styled.div`
  background: url(${({ icon }) => icon});
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 400px;
  opacity: 0;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  ${(props) =>
    props.secondary &&
    css`
      animation: ${showText} 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
    `};

  @media (max-width: 1500px) and (min-width: 651px) {
    width: 200px;
    height: 300px;
  }
  @media (max-width: 650px) {
    width: 150px;
    height: 200px;
  }
`;
const StyledInfo = styled.div`
  width: 50%;
  height: 400px;
  margin-left: 50px;
  background-color: transparent;
  perspective: 1200px;
  position: relative;
  @media (max-width: 1500px) and (min-width: 651px) {
    margin: 10px;
    height: 100%;
    width: 60%;
  }
  @media (max-width: 650px) {
    width: 100%;
    height: 100%;
    margin: 5px;
  }
`;
const StyledText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  position: relative;
  width: 100%;
  height: 300px;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transform: ${({ props }) => props && "rotateY(180deg)"};
  @media (max-width: 1001px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media (max-width: 1000px) and (min-width: 401px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
  @media (max-width: 400px) {
    font-size: 11px;
  }
`;
const StyledTextInside = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.s};

  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const StyledFrontCard = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: ${({ theme }) => theme.ternary};
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  padding: -0 20px;
  text-align: justify;
  align-items: center;
`;
const StyledBackCard = styled(StyledFrontCard)`
  position: absolute;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.quadruple};
  justify-content: space-around;
`;
const StyledImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: 1000px) and (min-width: 651px) {
    width: 100px;
  }
  @media (max-width: 650px) {
    width: 100px;
    height: 100px;
  }
`;
const StyledPhotoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const StyledPhoto = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
`;
const StyledSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 14px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const StyledLink = styled(Link)`
  padding-top: 60px;
  cursor: pointer;
  letter-spacing: 4px;
`;
const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  width: 16px;
  height: 16px;
  margin-left: -12px;
  border-left: 1px solid #111517;
  border-bottom: 1px solid #111517;
  transform: rotate(-45deg);
  animation: ${sdb07} 2s infinite;
  opacity: 0;
  box-sizing: border-box;
  &:nth-of-type(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  &:nth-of-type(2) {
    top: 16px;
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }
  &:nth-of-type(3) {
    top: 32px;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
`;

const AboutMeView = ({ id, name }) => {
  const [state, setstate] = useState(false);
  const [clickStatus, setclickStatus] = useState(false);
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    const page = document.querySelector(".aboutMe");
    window.addEventListener("scroll", () => {
      const pageTop = page.offsetTop;
      const slideInAt = window.pageYOffset + window.innerHeight;

      if (slideInAt > pageTop) {
        setstate(true);
      }
    });
  }, []);

  const btnClick = () => {
    setclickStatus(true);
    setvisible(true);
  };
  const returnClick = () => {
    setclickStatus(false);
    setvisible(false);
  };

  return (
    <StyledWrapper className="aboutMe" id={id} name={name}>
      <StyledTitle secondary={state}>Hello, my name is Agata.</StyledTitle>
      <StyledContainer>
        <StyledLeftContainer>
          <StyledPhotoBorder
            icon={image}
            data-aos="fade-up"
          ></StyledPhotoBorder>
        </StyledLeftContainer>
        <StyledInfo data-aos="fade-up">
          <StyledText props={clickStatus}>
            <StyledFrontCard>
              <StyledTextInside>Few words about me</StyledTextInside>
              I am 27 years old and currently work as a Product Engineer. I live
              in Wroclaw and since last year I have been intensively learning
              programming to get a job as a Front-end Developer.
              <br />
              <br />
              Programming has become my passion, that's why I put a lot of heart
              and effort into understanding issues and writing good code. I put
              emphasis on simplicity, functionality and dynamics.
              <br />
              <br />
              <CardButton type="button" onClick={btnClick} visible={visible}>
                Flip the card
              </CardButton>
            </StyledFrontCard>
            <StyledBackCard>
              <StyledPhotoContainer>
                <StyledPhoto>
                  <StyledImg src={zdj1} alt="zdj1"></StyledImg>
                  <StyledImg src={zdj2} alt="zdj2"></StyledImg>
                  <StyledImg src={zdj3} alt="zdj3"></StyledImg>
                </StyledPhoto>
                In my free time I like cooking and watching movies. I'm
                interested in home brewing and I'm a fan of craft beers. You
                will often find me in the gym or on the field playing football.
                In winter I spend time skiing.
              </StyledPhotoContainer>
              <CardButton type="button" onClick={returnClick}>
                Return
              </CardButton>
            </StyledBackCard>
          </StyledText>
        </StyledInfo>
      </StyledContainer>
      <StyledSection data-aos="fade-in">
        <StyledLink
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          duration={1000}
          isDynamic={true}
          offset={-70}
        >
          <StyledSpan></StyledSpan>
          <StyledSpan></StyledSpan>
          <StyledSpan></StyledSpan>My skills
        </StyledLink>
      </StyledSection>
    </StyledWrapper>
  );
};

export default AboutMeView;
