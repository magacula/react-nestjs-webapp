import { Resolver, Query } from '@nestjs/graphql';
import { CarsService } from './cars.service';

// This is our GraphQL resolver
// Resolvers provide the instructions for turning a GraphQL operation (a query, mutation, or subscription) into data.
// They return the same shape of data we specify in our schema by defining resolver functions and generating the Query type

@Resolver()
export class CarsResolver {
  // injecting the CarsService Provider
  constructor(private carService: CarsService) {}

  @Query((returns) => String)
  public async getCars() {
    return 'You have returned your cars array';
  }
}
