import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CarLogoImg from "../../../assets/car-logo.png";
import CarLogoDarkImg from "../../../assets/car-logo-dark.png";

interface ILogoProps {
  textColor?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
    mr-2
    ml-2
  `}
`;

const LogoText = styled.p`
  ${tw`
    text-xl
    font-bold
    text-black
    m-1

    md:text-2xl
  `}
  ${({ textColor }: any) =>
    textColor === "white" ? tw`text-white` : tw`text-black`}
` as any;

const ImageContainer = styled.div`
  width: auto;
  ${tw`
   h-6

   md:h-9
  `}

  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo(props: ILogoProps) {
  const { textColor } = props;
  return (
    <LogoContainer>
      <ImageContainer>
        <img
          src={textColor === "white" ? CarLogoDarkImg : CarLogoImg}
          alt="Logo"
        />
      </ImageContainer>
      <LogoText textColor={textColor || "dark"}>SFCarRental</LogoText>
    </LogoContainer>
  );
}
