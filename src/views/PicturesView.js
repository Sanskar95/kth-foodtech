import React from "react";
import styled from "styled-components";
import weather from "../assets/pictures/weather.webp";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import jay from '../assets/pictures/jay.jpg'
import alice from '../assets/pictures/alice.jpeg'
import nina from '../assets/pictures/Nina.png'
import stephanie from '../assets/pictures/Stephanie.jpg'
import razzaq from '../assets/pictures/Razzaq.jpg'
import nathalie from '../assets/pictures/Nathalie.jpg'
import patricia from '../assets/pictures/Patricia.S.jpeg'
import joe from '../assets/pictures/Joe.png'





const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #111517;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const StyledTitle = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 20px 0 20px 0;
`;
const StyledFirstBlock = styled.span`
  width: 100%;
  background: ${({ theme }) => theme.primary};
  position: absolute;
  height: 5px;
`;

const StyledNameTitle = styled.h1`
  font-family: "Poppins";
  color: ${({ theme }) => theme.secondary};
  font-size: 34px;
  margin: 10px;
  opacity: 1;
`;
const StyledContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const StyledCard = styled.div`
  position: relative;
  padding: 20px 10px;
`;
const StyledCardFace1 = styled.div`
  max-width: 300px;
  height: 210px;
  transition: 0.5s;
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transform: translateY(100px);
  font-size: 14px;
  ${StyledCard}:hover & {
    background: #ef0d33;
    transform: translateY(0);
  }
`;
const StyledContent = styled.div`
  opacity: 0.8;
  transition: 0.5s;
  ${StyledCard}:hover & {
    opacity: 1;
  }
`;
const StyledImgContent = styled.img`
  max-width: 250px;
  height: 15rem;
`;
const StyledTitleContent = styled.h3`
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
`;

const StyledTitleContentSmall = styled.h3`
  margin: 5px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: .7em;
`;

const StyledCardFace2 = styled(StyledCardFace1)`
  z-index: 1;
  background: #fff;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-110px);
  ${StyledCard}:hover & {
    transform: translateY(0);
    background: #fff;
  }
`;
const StyledContentText = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
`;
const StyledLink = styled.div`
  display: flex;
  justify-content: space-around;
`;
const StyledLinkButton = styled.a`
  margin: 15px 0 0;
  display: inline-block;
  text-decoration: none;
  font-weight: 900;
  color: #333;
  padding: 5px;
  border: 1px solid #333;
  font-style: 16px;k
  :hover {
    background: #333;
    color: #fff;
  }
`;

const PicturesView = ({ id }) => {
  return (
    <StyledWrapper id={id}>
      <StyledTitle>
        <StyledFirstBlock data-aos="zoom-in" data-aos-duration="2000" />
        <StyledNameTitle
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          Meet the Team
        </StyledNameTitle>
      </StyledTitle>
      <StyledContainer>
          <StyledCard>
              <StyledContent>
                  <StyledImgContent src={alice} alt="weather" />
                  <StyledTitleContent>Alice</StyledTitleContent>
                  <StyledTitleContentSmall>Project Manager</StyledTitleContentSmall>

              </StyledContent>

          </StyledCard>
          <StyledCard>
              <StyledContent>
                  <StyledImgContent src={patricia} alt="weather" />
                  <StyledTitleContent>Patricia</StyledTitleContent>
                  <StyledTitleContentSmall>Project Manager</StyledTitleContentSmall>

              </StyledContent>

          </StyledCard>
          

      </StyledContainer>
      <StyledContainer>
        <StyledCard>
            <StyledContent>
              <StyledImgContent src={stephanie} alt="weather" />
              <StyledTitleContent>Stephanie</StyledTitleContent>
                <StyledTitleContentSmall>Corporate Relations</StyledTitleContentSmall>
            </StyledContent>

        </StyledCard>
          <StyledCard>
              <StyledContent>
                  <StyledImgContent src={nina} alt="weather" />
                  <StyledTitleContent>Nina</StyledTitleContent>
                  <StyledTitleContentSmall>Corporate Relations</StyledTitleContentSmall>

              </StyledContent>

          </StyledCard>
          

      </StyledContainer>

      <StyledContainer>
        <StyledCard>
            <StyledContent>
              <StyledImgContent src={nathalie} alt="weather" />
              <StyledTitleContent>Nathalie</StyledTitleContent>
                <StyledTitleContentSmall>Public Relations</StyledTitleContentSmall>
            </StyledContent>

        </StyledCard>
          <StyledCard>
              <StyledContent>
                  <StyledImgContent src={joe} alt="weather" />
                  <StyledTitleContent>Joe</StyledTitleContent>
                  <StyledTitleContentSmall>Event Manager</StyledTitleContentSmall>

              </StyledContent>

          </StyledCard>
      </StyledContainer>

      <StyledContainer>
        <StyledCard>
            <StyledContent>
              <StyledImgContent src={razzaq} alt="weather" />
              <StyledTitleContent>Razzaq</StyledTitleContent>
                <StyledTitleContentSmall>Web Developer</StyledTitleContentSmall>
            </StyledContent>

        </StyledCard>
          <StyledCard>
              <StyledContent>
                  <StyledImgContent src={jay} alt="weather" />
                  <StyledTitleContent>Jabez</StyledTitleContent>
                  <StyledTitleContentSmall>Web Developer</StyledTitleContentSmall>

              </StyledContent>

          </StyledCard>
          

      </StyledContainer>

      
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={1000}
        isDynamic={true}
        offset={-70}
      >

      </Link>
    </StyledWrapper>
  );
};

export default PicturesView;
