import React from "react";
import styled from "styled-components";
import weather from "../assets/pictures/weather.webp";
import organizer from "../assets/pictures/recipe-organizer.webp";
import portfolio from "../assets/pictures/my-portfolio.webp";
import budzetomat from "../assets/pictures/budzetomat.webp";
import "aos/dist/aos.css";
import Button from "../components/atoms/Button";
import { Link } from "react-scroll";

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
  cursor: pointer;
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
`;
const StyledTitleContent = styled.h3`
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
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
  font-style: 16px;
  :hover {
    background: #333;
    color: #fff;
  }
`;

const PortfolioView = ({ id }) => {
  return (
    <StyledWrapper id={id}>
      <StyledTitle>
        <StyledFirstBlock data-aos="zoom-in" data-aos-duration="2000" />
        <StyledNameTitle
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          My Projects
        </StyledNameTitle>
      </StyledTitle>
      <StyledContainer>
        <StyledCard data-aos="zoom-in">
          <StyledCardFace1>
            <StyledContent>
              <StyledImgContent src={weather} alt="weather" />
              <StyledTitleContent>Weather App</StyledTitleContent>
            </StyledContent>
          </StyledCardFace1>
          <StyledCardFace2>
            <StyledContent>
              <StyledContentText>
                Web application for checking the current weather in different
                cities, deploy on Heroku. I used React, Node.js + Express and
                PostgreSQL technologies.
              </StyledContentText>
              <StyledLink>
                <StyledLinkButton
                  href="https://weather-app-db2020.herokuapp.com"
                  target="_blank"
                  rel="noopener"
                >
                  Demo
                </StyledLinkButton>
                <StyledLinkButton
                  href="https://github.com/AgaLip-js/fullstack-weather-app.git"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </StyledLinkButton>
              </StyledLink>
            </StyledContent>
          </StyledCardFace2>
        </StyledCard>
        <StyledCard data-aos="zoom-in">
          <StyledCardFace1>
            <StyledContent>
              <StyledImgContent src={organizer} alt="organizer" />
              <StyledTitleContent>Recipe Organizer</StyledTitleContent>
            </StyledContent>
          </StyledCardFace1>
          <StyledCardFace2>
            <StyledContent>
              <StyledContentText>
                Website dedicated to storing, adding and planning recipes. I
                used React, Styled Components, Redux technologies.
              </StyledContentText>
              <StyledLink>
                <StyledLinkButton
                  href="https://www.alipiak.com/recipe"
                  target="_blank"
                  rel="noopener"
                >
                  Demo
                </StyledLinkButton>
                <StyledLinkButton
                  href="https://github.com/AgaLip-js/RecipeOrganizerInREACT"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </StyledLinkButton>
              </StyledLink>
            </StyledContent>
          </StyledCardFace2>
        </StyledCard>
        <StyledCard data-aos="zoom-in">
          <StyledCardFace1>
            <StyledContent>
              <StyledImgContent src={portfolio} alt="portfolio" />
              <StyledTitleContent>My portfolio</StyledTitleContent>
            </StyledContent>
          </StyledCardFace1>
          <StyledCardFace2>
            <StyledContent>
              <StyledContentText>
                Website presenting my portfolio. I used React and Styled
                Components technologies.
              </StyledContentText>
              <StyledLink>
                <StyledLinkButton
                  href="https://github.com/AgaLip-js/my-portfolio"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </StyledLinkButton>
              </StyledLink>
            </StyledContent>
          </StyledCardFace2>
        </StyledCard>
        <StyledCard data-aos="zoom-in">
          <StyledCardFace1>
            <StyledContent>
              <StyledImgContent src={budzetomat} alt="budzetomat" />
              <StyledTitleContent>Home Budget</StyledTitleContent>
            </StyledContent>
          </StyledCardFace1>
          <StyledCardFace2>
            <StyledContent>
              <StyledContentText>
                My newest Fullstack React App to manage the home budget. The app
                is built on technologies: PostgreSQL, Express, React, Redux and
                Node.js. This project is under development, after completion it
                will be deployed to the Heroku server.
              </StyledContentText>
              <StyledLink>
                <StyledLinkButton
                  href="https://github.com/AgaLip-js/fullstack-homebudget"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </StyledLinkButton>
              </StyledLink>
            </StyledContent>
          </StyledCardFace2>
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
        <Button type="button">Contact Me</Button>
      </Link>
    </StyledWrapper>
  );
};

export default PortfolioView;
