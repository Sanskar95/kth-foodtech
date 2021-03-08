import React from 'react';
import styled from 'styled-components';

import 'aos/dist/aos.css';

const StyledListIcon = styled.li`
  ::after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  @media (max-width: 1000px) {
    padding: 20px 0;
  }
  @media (max-width: 650px) {
    padding: 15px 0;
  }
`;
const StyledDirection = styled.div`
  position: relative;
  width: 200px;
  float: ${({ left }) => (left ? 'left' : 'right')};
  margin-right: ${({ left }) => (left ? '0px' : '31px')};
  margin-left: ${({ left }) => left && '31px'};
  @media (max-width: 1000px) {
    float: none;
    width: 100%;
    text-align: center;
    margin-left: ${({ left }) => left && '0px'};
  }
`;

const StyledFlagWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 10px 0;
  text-align: center;
  align-items: center;
`;
const StyledCircle = styled.span`
  position: absolute;
  top: 50%;
  content: ' ';
  display: block;
  width: 14px;
  height: 14px;
  margin-top: -7px;
  background: #f5f5f5;
  border-radius: 10px;
  border: 4px solid rgb(255, 22, 22);
  right: ${({ left }) => (left ? '0px' : '-27px')};
  left: ${({ left }) => (left ? '212px' : '-25px')};
  @media (max-width: 1000px) {
    display: none;
  }
`;

const StyledFlag = styled.span`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 200px;
  background: rgb(248, 248, 248);
  padding: 6px 10px;
  border-radius: 5px;
  font-weight: 600;
  text-align: left;
  box-shadow: ${({ left }) => (left ? '-1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15)' : '1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15)')};
  align-items: center;
  opacity: 0;
  @media (max-width: 650px) {
    width: 190px;
  }

  ::after {
    content: '';
    position: absolute;
    right: ${({ left }) => (left ? '0%' : '100%')};
    left: ${({ left }) => left && '100%'};
    top: 50%;
    height: 0;
    width: 0;
    margin-top: -8px;
    border: solid transparent;
    border-left-color: ${({ left }) => left && 'rgb(248, 248, 248)'};
    border-right-color: ${({ left }) => (left ? 'none' : 'rgb(248, 248, 248)')};
    border-width: 8px;
    pointer-events: none;
  }
  @media (max-width: 1000px) {
    background: rgb(255, 255, 255);
    z-index: 15;
    ::before {
      position: absolute;
      top: -25px;
      left: 50%;
      content: ' ';
      display: block;
      width: 12px;
      height: 12px;
      margin-left: -6px;
      background: #fff;
      border-radius: 10px;
      border: 4px solid rgb(255, 22, 22);
      z-index: 10;
    }
    ::after {
      content: '';
      position: absolute;
      left: 50%;
      top: -8px;
      height: 0;
      width: 0;
      margin-left: -8px;
      border: solid transparent;
      border-bottom-color: rgb(255, 255, 255);
      border-width: 8px;
      pointer-events: none;
    }
  }
`;

const StyledTitleLogo = styled.p`
  overflow-wrap: break-word;
  font-size: 14px;
  text-align: center;
  width: 100px;
`;

const StyledLogo = styled.div`
  object-fit: cover;
  background: url(${({ icon }) => icon});
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: bottom;
  background-color: rgb(248, 248, 248);
  display: ${({ icon }) => (icon ? 'flex' : 'none')};
  justify-content: space-between;
`;

const SkillsIcon = ({ left, icon, children, aos, styleI, styleT }) => {
  return (
    <StyledListIcon>
      <StyledDirection left={left}>
        <StyledFlagWrapper>
          <StyledCircle left={left} />
          <StyledFlag data-aos={aos} left={left}>
            <StyledLogo icon={icon} style={styleI}></StyledLogo>
            <StyledTitleLogo style={styleT}>{children}</StyledTitleLogo>
          </StyledFlag>
        </StyledFlagWrapper>
      </StyledDirection>
    </StyledListIcon>
  );
};

export default SkillsIcon;
