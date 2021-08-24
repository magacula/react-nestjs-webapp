import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import hamMenuStyles from "./hamMenuStyles";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`;

// uses "menu" prop to change styles on mobile
const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-xs
    text-black
    font-medium
    
    mr-1

    md:text-base
    md:mr-5

    cursor-pointer
    transition
    duration-300
    ease-in-out

    hover:text-red-500
  `}

  /* if mobile menu then apply custom css style */
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
       text-white
        text-xl
        mb-3

        focus:text-white
        hover:text-black
       `}
    `};
`;

export function NavItems() {
  // utilizes react-responsive library to use a media query for smaller devices
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile) {
    return (
      <Menu right styles={hamMenuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="#">Home</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Cars</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Services</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Contact Us</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  }

  return (
    <ListContainer>
      <NavItem>
        <a href="#"> Home</a>
      </NavItem>
      <NavItem>
        <a href="#">Cars</a>
      </NavItem>
      <NavItem>
        <a href="#">Services</a>
      </NavItem>
      <NavItem>
        <a href="#">Contact Us</a>
      </NavItem>
    </ListContainer>
  );
}
