import { Injectable } from '@nestjs/common';

// Here, we define the @Injectable Decorator that serves as a class Provider (injected as a dependency in our Resolver)
// Decorators associate classes with required metadata and enable Nest to create a routing map (tie requests to the corresponding controllers).
// This service will be responsible for data storage and retrieval, and is designed to be used be the cars controller
@Injectable()
export class CarsService {}
