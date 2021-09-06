import { apolloClient } from "../graphql";
import { GET_ALL_CARS } from "./queries";
import { GetCarsFromServer_getCars } from "./__generated__/GetCarsFromServer";

class CarService {
  public async getCars(): Promise<GetCarsFromServer_getCars[]> {
    const res = await apolloClient
      .query({ query: GET_ALL_CARS })
      .catch((err) => {
        throw err;
      });

    if (res && res.data) return res.data as GetCarsFromServer_getCars[];

    return [];
  }
}

export default new CarService();
