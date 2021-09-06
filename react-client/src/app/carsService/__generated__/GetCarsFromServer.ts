/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCarsFromServer
// ====================================================

export interface GetCarsFromServer_getCars {
  __typename: "Car";
  id: string;
  name: string;
  dailyPrice: number;
  monthlyPrice: number;
  gearType: string;
  mileage: string;
  gas: string;
  thumbnailSrc: string;
}

export interface GetCarsFromServer {
  getCars: GetCarsFromServer_getCars[];
}
