import { faMailchimp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMailBulk, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { SCREENS } from "../responsive";

const FooterContainer = styled.div`
  min-height: 55em;
  ${tw`
    flex
    flex-wrap
    min-w-full
    w-full
    max-w-screen-2xl
    bg-gray-900
    pt-10
    pb-1

    
    md:pt-12
    lg:pl-12
    lg:pr-12
    xl:justify-center
  `}

  @media (min-width: ${SCREENS.md}) {
    min-height: 40em;
  }

  @media (min-width: ${SCREENS.lg}) {
    min-height: 30em;
  }

  @media (min-width: ${SCREENS.xl}) {
    min-height: 20em;
  }
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    ml-6
    mr-6
  `}
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    mt-2
    ml-2
    max-w-xs
    leading-5
  `}
`;

const FooterSectionContainer = styled.div`
  ${tw`
    flex
    flex-col   
    ml-8
    mr-8
    mt-5

    md:mt-0
    
  `}
`;

const LinksList = styled.ul`
  ${tw`
    outline-none    
    list-none
    flex
    flex-col   
  `}
`;

const ListItem = styled.li`
  ${tw`
    mb-3
    cursor-pointer
  `}

  & > a {
    ${tw`
      text-sm
    text-white
      transition
      duration-300
      ease-in-out
     hover:text-gray-500
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-xl
    font-bold
    text-white
    mb-3   
  `}
`;

const RedIcon = styled.span`
  ${tw`
    w-8
    h-8
    rounded-full
    flex
    items-center
    justify-center
    text-white
    text-base
    bg-red-500
    mr-2
  `}
`;

const ContactContainer = styled.div`
  ${tw`
    flex
    flex-col
    mt-4
    mb-4
  `}
`;

const RowContainer = styled.div`
  ${tw`
    flex
    flex-row
    items-center
  `}
`;

const SmallText = styled.h6`
  ${tw`
    text-base
    text-white
  `}
`;

const ButtomContainer = styled.div`
  ${tw`
    flex
    flex-col
    bg-gray-900
    min-w-full
    w-full
    max-w-screen-2xl
    justify-center
    pt-1
    pb-1
  `}
`;

const CopyRightText = styled.p`
  font-size: 10px;
  /* position: absolute; */
  ${tw`
    text-gray-400
    text-center
  `}
`;

function Footer() {
  return (
    <>
      <FooterContainer>
        <AboutContainer>
          <Logo textColor="white" />
          <AboutText>
            SFCarRental is a San Francisco's very own car rental company that
            has the highest quality cars and services
          </AboutText>
        </AboutContainer>
        <FooterSectionContainer>
          <HeaderTitle>Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Careers</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </FooterSectionContainer>
        <FooterSectionContainer>
          <HeaderTitle>Vehicles</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Cars</a>
            </ListItem>
            <ListItem>
              <a href="#">SUVs</a>
            </ListItem>
            <ListItem>
              <a href="#">Trucks</a>
            </ListItem>
            <ListItem>
              <a href="#">Minivans & vans</a>
            </ListItem>
            <ListItem>
              <a href="#">Luxurious Cars</a>
            </ListItem>
          </LinksList>
        </FooterSectionContainer>
        <FooterSectionContainer>
          <HeaderTitle>More Info</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms & Conditions</a>
            </ListItem>
          </LinksList>
        </FooterSectionContainer>
        <FooterSectionContainer>
          <ContactContainer>
            <HeaderTitle>Call Now</HeaderTitle>
            <RowContainer>
              <RedIcon>
                <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
              </RedIcon>
              <SmallText>+91 888-421-9421</SmallText>
            </RowContainer>
          </ContactContainer>
          <ContactContainer>
            <HeaderTitle>Email Us</HeaderTitle>
            <RowContainer>
              <RedIcon>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </RedIcon>
              <SmallText>sfcarrental@gmail.com</SmallText>
            </RowContainer>
          </ContactContainer>
        </FooterSectionContainer>
      </FooterContainer>
      <ButtomContainer>
        <CopyRightText>
          CopyRight &copy; 2021 SFCarRental. All rights reserved.
        </CopyRightText>
      </ButtomContainer>
    </>
  );
}

export default Footer;
