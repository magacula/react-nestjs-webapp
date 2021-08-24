import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faCarSide,
  faMap,
  faMapMarked,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3
    
    lg:pt-6
    lg:pb-6
    `}
`;

const Title = styled.h1`
  ${tw`
      text-2xl
      text-black
      font-extrabold
      text-center
      
      lg:text-4xl
    `}
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7

    lg:mt-16
  `}
`;

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    transition-colors
    m-3

    md:w-96
    md:mt-8
    lg:mt-0
    hover:text-red-500
  `}
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    rounded-lg
    items-center
    justify-center
    p-6
  `}
`;

const StepTitle = styled.h4`
  ${tw`
    text-black 
    text-lg
    font-semibold
    text-center
    mt-4
  `}
`;

const StepDescription = styled.p`
  ${tw`
    text-xs
    text-center
    w-10/12
    text-gray-600
    mt-1

    md:text-sm
  `}
`;

const StepIcon = styled.span`
  ${tw`
    text-3xl
    text-red-500
  `}
`;

export function BookingSteps() {
  return (
    <Container>
      <Title>Our Simple 3 Step Process</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarked} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Locate the closest SFCarRental Near You and Book Now
          </StepDescription>
        </StepContainer>
        {/*  STEP 2 */}
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pickup Date</StepTitle>
          <StepDescription>Pick the Best Date To Rent Your Car</StepDescription>
        </StepContainer>
        {/*  STEP 23*/}
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book Your Car Now</StepTitle>
          <StepDescription>
            Book Your Nicest Car With Ease In A Single Click
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
