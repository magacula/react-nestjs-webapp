import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { NewCarInput } from './data_to_object/new-car.input';
import { Car } from './entities/car';

// This is our GraphQL Resolver
// Resolvers provide the instructions for turning a GraphQL operation (a query, mutation, or subscription) into data.
// They return the same shape of data we specify in our schema by defining resolver functions and generating the Query type

@Resolver()
export class CarsResolver {
  // injecting the CarsService Provider
  constructor(private carService: CarsService) {}

  // Returning a Car Array
  @Query((returns) => [Car])
  public async getCars(): Promise<Car[]> {
    return await this.carService.getAllCars().catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Car)
  public async addNewCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carService.addCar(newCarData).catch((err) => {
      throw err;
    });
  }
}
