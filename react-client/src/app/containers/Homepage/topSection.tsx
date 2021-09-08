import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive/index";

import MclarenCarImg from "../../../assets/mclaren-orange-big.png";
import PorsheCarImg from "../../../assets/porche.png";
import BlobImg from "../../../assets/blob.svg";
import { Button } from "../../components/button";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3

    lg:pl-12
    lg:pr-12
  `}
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `}
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `}
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    text-black
    mb-4

    xl:text-6xl
    xl:leading-relaxed


    lg:font-black
    lg: leading-normal

    md:text-5xl
    md:font-extrabold

    sm:text-3xl
    sm:leading-snug
    
  `}
`;

const Description = styled.p`
  ${tw`
    text-xs
    text-gray-800
    max-h-12

    xl:text-lg
    lg:text-sm
    sm:max-h-full
  `}
`;

const BlogContainer = styled.div`
  width: 20em;
  height: 20em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 10em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const Car = styled.div`
  position: absolute;
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  margin-left: -0.25rem;
  ${tw`
    mt-8
    flex
    flex-row
    flex-wrap

    lg:mt-5
  `}
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Quality Cars With Us</Slogan>
        <Description>
          Choose the best cars from San Francisco's very own car rental company
          at the best prices!
        </Description>
        <ButtonsContainer>
          <Button text="Book Your Ride" />
          <Button theme="filled" text="Loan Your Car" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlogContainer>
          <img src={BlobImg} alt="Background blob" />
        </BlogContainer>
        <Car>
          <img src={MclarenCarImg} alt="Mclaren Sports car" />
        </Car>
      </RightContainer>
    </TopSectionContainer>
  );
}
