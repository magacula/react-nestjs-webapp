import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Margin } from "../margin";
import { Button } from "../button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { SCREENS } from "../responsive";
import { useDetectClickOutside } from "react-detect-click-outside";

const CardContainer = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4); // custom box-shadow on white background
  ${tw`
      flex
      justify-center
      items-center
      rounded-md
      pt-1
      pb-1
      pr-2
      pl-2
      ml-2
      mr-2

      md:pt-2
      md:pb-2
      md:pl-9
      md:pr-9
      md:mt-4
    `}
`;

const ItemContainer = styled.div`
  ${tw`
    flex
    relative
  `}
`;

const Icon = styled.span`
  ${tw`
     text-red-500
     fill-current
     text-xs
     mr-1

     md:text-base
     md:mr-3
  `}
`;

const Name = styled.span`
  user-select: none;
  ${tw`
     text-gray-600
     text-xs
     cursor-pointer

     md:text-sm
  `}
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
   bg-gray-300
   mr-2
   ml-2

   md:mr-5
   md:ml-6
  `}
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  top: 2.75em;
  user-select: none;

  /* @media (min-width: ${SCREENS.md}) {
    left: -2em;
  } */
` as any;

const StartCalendar = styled(DateCalendar)`
  @media (min-width: ${SCREENS.md}) {
    left: -2em;
  }
`;

const ReturnCalendar = styled(DateCalendar)`
  left: -6em;

  @media (min-width: ${SCREENS.md}) {
    left: -4em;
  }
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-700
    fill-current
    text-xs

    md:text-base
    md:ml-1
   `}
`;

export function BookingCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
  };

  const toggleReturnCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };

  const closeCalendarOnClickOutside = () => {
    setStartCalendarOpen(false);
    setReturnCalendarOpen(false);
  };

  // ref to target div Card Container
  const ref = useDetectClickOutside({
    onTriggered: closeCalendarOnClickOutside,
  });

  return (
    <CardContainer ref={ref}>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartCalendar} ref={ref}>
          Pick Up Date
        </Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <StartCalendar value={startDate} onChange={setStartDate as any} />
        )}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnCalendar}>Return Name</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <ReturnCalendar value={returnDate} onChange={setReturnDate as any} />
        )}
      </ItemContainer>
      <Margin direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
}
