import gql from "graphql-tag";

export const GET_ALL_CARS = gql`
  query GetCarsFromServer {
    getCars {
      id
      name
      dailyPrice
      monthlyPrice
      gearType
      mileage
      gas
      thumbnailSrc
    }
  }
`;
