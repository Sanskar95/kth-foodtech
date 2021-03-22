import React from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import {
  faFacebook,
  faInstagram,
  faGoogle,
  faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "../components/organisms/Form";
import "./ContactView.css";
import MyCv from "../assets/files/CV_EN-portfolio - Agata Lipiak.pdf";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  @media (max-height: 800px) {
    height: 100%;
  }
`;
const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
  flex-wrap: wrap;
  @media (max-height: 600px) {
    margin: 40px 0;
  }
`;
const StyledSocialIcon = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  background: white;
  position: relative;
  padding: 0;
  margin: 20px 0 40px 0;
  @media (max-width: 500px) {
    margin: 20px 0;
  }
`;
const StyledList = styled.li`
  width: fit-content;
  height: fit-content;
`;
const StyledFacebookIcon = styled.div`
  width: 75px;
  height: 75px;
  margin: 0 20px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  border: 5px solid #e7e7e7;
  transition: all 0.5s ease;
  position: relative;
  ${StyledList}:hover & {
    border: 5px solid #3b5998;
    box-shadow: 0 0 15px #3b5998;
    transition: all 0.5s ease;
  }
  @media (max-width: 1300px) {
    width: 65px;
    height: 65px;
  }
  @media (max-width: 844px) {
    width: 55px;
    height: 55px;
    border: none;
    margin: 0 15px;

    ${StyledList}:hover & {
      border: none;
      box-shadow: none;
    }
  }
  @media (max-width: 340px) {
    margin: 0 5px;
  }
`;
const StyledInstagramIcon = styled(StyledFacebookIcon)`
  ${StyledList}:hover & {
    border: 5px solid #bc2a8d;
    box-shadow: 0 0 15px #bc2a8d;
    transition: all 0.5s ease;
  }
  @media (max-width: 844px) {
    width: 55px;
    height: 55px;
    border: none;

    ${StyledList}:hover & {
      border: none;
      box-shadow: none;
    }
  }
`;
const StyledGoogleIcon = styled(StyledFacebookIcon)`
  ${StyledList}:hover & {
    border: 5px solid #dd4b39;
    box-shadow: 0 0 15px #dd4b39;
    transition: all 0.5s ease;
  }
  @media (max-width: 844px) {
    width: 55px;
    height: 55px;
    border: none;

    ${StyledList}:hover & {
      border: none;
      box-shadow: none;
    }
  }
`;
const StyledGitIcon = styled(StyledFacebookIcon)`
  ${StyledList}:hover & {
    border: 5px solid #24292e;
    box-shadow: 0 0 15px #24292e;
    transition: all 0.5s ease;
  }
  @media (max-width: 844px) {
    width: 55px;
    height: 55px;
    border: none;

    ${StyledList}:hover & {
      border: none;
      box-shadow: none;
    }
  }
`;
const StyledLink = styled.a`
  position: relative;
  text-decoration: none;
`;
const StyledFacebookLogo = styled.span`
  color: #e7e7e7;
  transition: all 0.5s ease;

  ${StyledList}:hover & {
    color: #3b5998;
    text-shadow: 0 0 15px #3b5998;
    transition: all 0.5s ease;
  }
`;
const StyledInstagramLogo = styled(StyledFacebookLogo)`
  ${StyledList}:hover & {
    color: #bc2a8d;
    text-shadow: 0 0 15px #bc2a8d;
    transition: all 0.5s ease;
  }
`;
const StyledGoogleLogo = styled(StyledFacebookLogo)`
  ${StyledList}:hover & {
    color: #dd4b39;
    text-shadow: 0 0 15px #dd4b39;
    transition: all 0.5s ease;
  }
`;
const StyledGitLogo = styled(StyledFacebookLogo)`
  ${StyledList}:hover & {
    color: #24292e;
    text-shadow: 0 0 15px #24292e;
    transition: all 0.5s ease;
  }
`;
const StyledTitleFacebook = styled.p`
  position: relative;
  opacity: 0;
  color: #3b5998;
  text-shadow: 0 0 15px #3b5998;
  transition: opacity 0.5s ease;
  font-size: 18px;
  ${StyledList}:hover & {
    opacity: 1;
  }
  @media (max-width: 1300px) {
    font-size: 16px;
    margin: 10px;
  }
  @media (max-width: 844px) {
    margin: 5px;
  }
`;
const StyledTitleInstagram = styled(StyledTitleFacebook)`
  ${StyledList}:hover & {
    opacity: 1;
  }
  color: #bc2a8d;
  text-shadow: 0 0 15px #bc2a8d;
`;
const StyledTitleGoogle = styled(StyledTitleFacebook)`
  ${StyledList}:hover & {
    opacity: 1;
  }
  color: #dd4b39;
`;
const StyledTitleGit = styled(StyledTitleFacebook)`
  ${StyledList}:hover & {
    opacity: 1;
  }
  color: #24292e;
`;
const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledTitle = styled.p`
  font-size: 22px;
  color: black;
  font-weight: 600;
  text-align: center;
  margin: 15px;
  @media (max-width: 844px) {
    font-size: 16px;
  }
  @media (max-width: 340px) {
    font-size: 14px;
  }
`;
const StyledDownloadFile = styled.div`
  text-align: center;
`;
const StyledDownloadCV = styled.a`
  font-size: 50px;
  color: #e7e7e7;
  transition: all 0.5s ease;
  :hover {
    color: black;
  }
  @media (max-width: 844px) {
    font-size: 40px;
  }
`;
const StyledDownloadTitle = styled(StyledTitle)``;

const ContactView = ({ id }) => {
  return (
    <StyledContainer>
      <StyledWrapper id={id}>
        <Form />
        <StyledContactContainer data-aos="fade-down">
          <StyledTitle>You can also find us on social media</StyledTitle>
          <StyledSocialIcon>
            <StyledList>
              <StyledFacebookIcon>
                <StyledLink
                  href={"https://www.facebook.com/kthfoodtech"}
                  target="_blank"
                  rel="noopener"
                >
                  <StyledFacebookLogo>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="2x"
                      className="fontIcon"
                    />
                  </StyledFacebookLogo>
                  <StyledTitleFacebook>Facebook</StyledTitleFacebook>
                </StyledLink>
              </StyledFacebookIcon>
            </StyledList>
            <StyledList>
              <StyledInstagramIcon>
                <StyledLink
                  href={"https://www.instagram.com/kthfoodtech/"}
                  target="_blank"
                  rel="noopener"
                >
                  <StyledInstagramLogo>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="2x"
                      className="fontIcon"
                    />
                  </StyledInstagramLogo>
                  <StyledTitleInstagram>Instagram</StyledTitleInstagram>
                </StyledLink>
              </StyledInstagramIcon>
            </StyledList>
            <StyledList>
              <StyledGoogleIcon>
                <StyledLink
                  href={"https://www.linkedin.com/company/kth-foodtech/"}
                  target="_blank"
                  rel="noopener"
                >
                  <StyledGoogleLogo>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2x"
                      className="fontIcon"
                    />
                  </StyledGoogleLogo>
                  <StyledTitleGoogle>LinkedIn</StyledTitleGoogle>
                </StyledLink>
              </StyledGoogleIcon>
            </StyledList>

          </StyledSocialIcon>
        </StyledContactContainer>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default ContactView;
