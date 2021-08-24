import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import JeepImg from "../../../assets/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    pt-4
    pb-4
    bg-white
    justify-center

    md:pl-0
    md:pr-0
  `}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -30px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `}
`;

const Title = styled.h1`
  ${tw`
  text-black
    text-2xl
    font-extrabold

    md:font-black
    md:leading-normal
    md:text-5xl
  `}
`;

const InfoText = styled.p`
  ${tw`
    max-w-2xl
    text-sm
    text-gray-500
    font-normal
    mt-4
    md:text-base

  `}
`;

export const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt="Jeep Car" />
      </CarContainer>
      <InfoContainer>
        <Title>Get the Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          dolorem, dolores debitis, necessitatibus eos aspernatur, optio a nemo
          explicabo autem quis provident voluptas nobis tempore excepturi labore
          ipsum odio totam! Officiis esse minima fugit asperiores facere hic
          explicabo quia quos magnam dolorum dicta expedita eligendi, cumque
          cum, ut nisi perferendis quibusdam dignissimos reprehenderit non fuga
          voluptates. Distinctio sint eligendi eaque! Illo mollitia culpa
          repellendus exercitationem corporis dignissimos reiciendis nemo. Animi
          perferendis doloremque eaque?
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};
