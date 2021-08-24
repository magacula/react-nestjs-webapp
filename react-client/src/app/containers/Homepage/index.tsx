import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookingCard } from "../../components/bookingCard";
import Footer from "../../components/footer";
import { Margin } from "../../components/margin";
import { Navbar } from "../../components/Navbar";
import { BookingSteps } from "../bookingSteps";
import { AboutUs } from "./aboutUs";
import { TopCars } from "./topCars";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Margin direction="vertical" margin="4em" />
      <BookingCard />
      <Margin direction="vertical" margin="10em" />
      <BookingSteps />
      <Margin direction="vertical" margin="8em" />
      <AboutUs />
      <Margin direction="vertical" margin="10em" />
      <TopCars />
      <Footer />
    </PageContainer>
  );
}
