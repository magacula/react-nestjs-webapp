import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import carsService from "../../carsService";
import { GetCarsFromServer_getCars } from "../../carsService/__generated__/GetCarsFromServer";
import { setTopCars } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { createSelector } from "reselect";
import { makeSelectTopCars } from "./selectors";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    mb-10

    md:pl-0
    md:pr-0
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

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7

    md:mt-16
  `}
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `}
`;

// Dispatching action from TopCars Component
const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCarsFromServer_getCars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));

export const TopCars = () => {
  const [current, setCurrent] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { topCars } = useSelector(stateSelector);
  const { setTopCars } = actionDispatch(useDispatch());

  const fetchTopCars = async () => {
    const res = await carsService.getCars().catch((err) => {
      console.log("Error: " + err);
    });
    console.log(res);

    if (res) setTopCars(res);
  };

  // const testCar1: ICar = {
  //   name: "Audi S3 Car",
  //   mileage: "10k",
  //   thumbnailSrc:
  //     "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
  //   dailyPrice: 70,
  //   monthlyPrice: 1600,
  //   gearType: "Auto",
  //   gas: "Petrol",
  // };

  // const testCar2: ICar = {
  //   name: "Honda City 5 Seater Car",
  //   mileage: "20k",
  //   thumbnailSrc:
  //     "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
  //   dailyPrice: 50,
  //   monthlyPrice: 1500,
  //   gearType: "Auto",
  //   gas: "Petrol",
  // };

  const isEmptyTopCars = !topCars || topCars.length === 0;

  const cars =
    (!isEmptyTopCars &&
      topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailSrc} />)) ||
    [];

  // const cars = [
  //   <Car {...testCar1} />,
  //   <Car {...testCar2} />,
  //   <Car {...testCar1} />,
  //   <Car {...testCar1} />,
  //   <Car {...testCar2} />,
  //   <Car {...testCar1} />,
  // ];

  useEffect(() => {
    fetchTopCars();
  }, []);

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      {!isEmptyTopCars ? (
        <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={cars}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots
            value={current}
            onChange={setCurrent}
            number={isMobile ? cars.length : Math.ceil(cars.length / 2)}
          />
        </CarsContainer>
      ) : (
        <EmptyCars>No Top Cars are shown..</EmptyCars>
      )}
    </TopCarsContainer>
  );
};
