import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import css from "../assets/pictures/css.webp";
import html5 from "../assets/pictures/html.webp";
import js from "../assets/pictures/js.webp";
import react from "../assets/pictures/react.webp";
import git from "../assets/pictures/git.webp";
import styledC from "../assets/pictures/styled.webp";
import es6 from "../assets/pictures/es6.webp";
import sass from "../assets/pictures/sass.webp";
import redux from "../assets/pictures/redux.webp";
import nextJS from "../assets/pictures/next.webp";
import reactnative from "../assets/pictures/native.webp";
import nodeJS from "../assets/pictures/node.webp";
import gatsby from "../assets/pictures/gatsby.webp";
import postgresql from "../assets/pictures/sql.webp";
import mongo from "../assets/pictures/mongo.webp";
import "aos/dist/aos.css";
import SkillsIcon from "../components/atoms/SkillsIcon";

const typing = keyframes`
 0% { width: 0; }
 100% {  
   width:20ch; 
   }
`;
const typing2 = keyframes`
 0% { width: 0; }
 100% {  
   width:18.5ch; 
   }
`;
const typingSec = keyframes`
 0% { width: 0}
 100% {  
   width: 20.5ch; 
   }
`;
const typingSec2 = keyframes`
 0% { width: 0 }
 100% {  
   width: 22ch; 
   }
`;

const blinkCaret = keyframes`
  0%, 100% { border-color: transparent }
  50% { border-color: #ef0d33; }
`;

const StyledWrapper = styled.div`
  height: fit-content;
  width: 100%;
  background-color: #e7e7e7;
`;
const StyledSkillsView = styled.div`
  width: 100%;
  background: #e7e7e7;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  flex-wrap: wrap;
`;
const StyledTitle = styled.h2`
  height: 35px;
  width: 0;
  overflow: hidden;
  position: relative;
  color: black;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 3px;
  border-right: 0.15em solid ${({ theme }) => theme.primary};
  opacity: 1;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  @media (max-width: 1000px) {
    height: 30px;
    font-size: 16px;
  }
`;
const StyledTitleR = styled.h2`
  height: 35px;
  width: 0;
  overflow: hidden;
  position: relative;
  color: black;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 3px;
  border-right: 0.15em solid ${({ theme }) => theme.primary};
  opacity: 1;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  animation: ${typingSec} 2s steps(30, end) 0.5s forwards,
    ${blinkCaret} 0.75s step-end infinite;
  animation-delay: 1s;
  @media (max-width: 1000px) {
    height: 30px;
    font-size: 16px;
    animation: ${typingSec2} 2s steps(30, end) 0.5s forwards,
      ${blinkCaret} 0.75s step-end infinite;
    animation-delay: 1s;
  }
`;
const StyledTitleL = styled(StyledTitleR)`
  animation: ${typing2} 2s steps(30, end) 0.5s forwards,
    ${blinkCaret} 0.75s step-end infinite;
  animation-delay: 1s;
  @media (max-width: 1000px) {
    animation: ${typing} 2s steps(30, end) 0.5s forwards,
      ${blinkCaret} 0.75s step-end infinite;
    animation-delay: 1s;
  }
`;

const StyledTimeline = styled.ul`
  position: relative;
  width: 500px;
  height: 100%;
  margin: 20px auto;
  padding: 10px 0;
  list-style-type: none;
  ::before {
    position: absolute;
    left: 50%;
    top: 0;
    content: " ";
    display: block;
    width: 6px;
    height: 100%;
    margin-left: -3px;
    background: rgb(80, 80, 80);
    background: linear-gradient(
      to bottom,
      rgb(231, 231, 231) 0%,
      rgb(17, 21, 23) 8%,
      rgb(17, 21, 23) 92%,
      rgb(231, 231, 231) 100%
    );
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin: 0;
  }
`;

const StyledColumn = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  @media (max-width: 1000px) {
    width: 200px;
  }
  @media (max-width: 650px) {
    width: 190px;
  }
`;

const SkillsView = ({ id, name }) => {
  const [state, setstate] = useState(false);
  const myRef = useRef();
  let animR;
  animR = window.innerWidth > 500 ? "fade-left" : "fade-up";
  let animL;
  animL = window.innerWidth > 500 ? "fade-right" : "fade-up";
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!state) {
        const page = myRef.current;
        const pageTop = page.offsetTop;
        const slideInAt = window.pageYOffset + window.innerHeight;

        if (slideInAt > pageTop) {
          setstate(true);
        }
      }
    });
  }, [state]);

  return (
    <StyledWrapper>
      <StyledSkillsView className="skills" id={id} name={name} ref={myRef}>
        <StyledColumn>
          {state ? (
            <StyledTitleL> My learning path </StyledTitleL>
          ) : (
            <StyledTitle></StyledTitle>
          )}
          <StyledTimeline>
            <SkillsIcon icon={html5} aos={animR}>
              HTML5
            </SkillsIcon>
            <SkillsIcon left icon={css} aos={animL}>
              CSS3
            </SkillsIcon>
            <SkillsIcon icon={js} aos={animR}>
              JAVASCRIPT
            </SkillsIcon>
            <SkillsIcon left icon={es6} aos={animL}>
              ES6
            </SkillsIcon>
            <SkillsIcon icon={git} aos={animR}>
              GIT
            </SkillsIcon>
            <SkillsIcon left icon={react} aos={animL}>
              REACT
            </SkillsIcon>
            <SkillsIcon icon={styledC} aos={animR}>
              STYLED COMPONENTS
            </SkillsIcon>
            <SkillsIcon
              left
              icon={redux}
              styleI={{ height: "48px" }}
              aos={animL}
            >
              REDUX
            </SkillsIcon>
            <SkillsIcon icon={nodeJS} aos={animR}>
              NODE.JS + EXPRESS
            </SkillsIcon>
            <SkillsIcon
              left
              icon={postgresql}
              styleI={{ height: "50px", width: "48px" }}
              aos={animL}
            >
              POSTGRESQL
            </SkillsIcon>
          </StyledTimeline>
        </StyledColumn>
        <StyledColumn>
          {state ? (
            <StyledTitleR> My learning target </StyledTitleR>
          ) : (
            <StyledTitle></StyledTitle>
          )}
          <StyledTimeline>
            <SkillsIcon icon={react} aos={animR}>
              MORE REACT
            </SkillsIcon>
            <SkillsIcon
              left
              icon={redux}
              styleI={{ height: "48px" }}
              aos={animL}
            >
              MORE REDUX
            </SkillsIcon>
            <SkillsIcon icon={mongo} aos={animR} styleI={{ height: "60px" }}>
              MongoDB
            </SkillsIcon>
            <SkillsIcon left icon={sass} aos={animL}>
              SASS
            </SkillsIcon>
            <SkillsIcon icon={reactnative} aos={animR}>
              REACT NATIVE
            </SkillsIcon>
            <SkillsIcon
              icon={nextJS}
              styleI={{ height: "45px", width: "75px" }}
              aos={animL}
              left
            >
              NEXT.JS
            </SkillsIcon>
            <SkillsIcon icon={gatsby} aos={animR}>
              GATSBY.JS
            </SkillsIcon>
            <SkillsIcon left styleT={{ width: "200px" }} aos={animL}>
              GOOD PROGRAMMING PRACTICES
            </SkillsIcon>
          </StyledTimeline>
        </StyledColumn>
      </StyledSkillsView>
    </StyledWrapper>
  );
};

export default SkillsView;
