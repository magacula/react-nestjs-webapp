import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewCarInput } from './data_to_object/new-car.input';
import { Car } from './entities/car';

// Here, we define the @Injectable Decorator that serves as a class Provider (injected as a dependency in our Resolver)
// Decorators associate classes with required metadata and enable Nest to create a routing map (tie requests to the corresponding controllers).
// This service will be responsible for data storage and retrieval, and is designed to be used by the GraphQL Resolver
@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  public async getAllCars(): Promise<Car[]> {
    return await this.carRepository.find({}).catch((error) => {
      throw new InternalServerErrorException();
    });
  }

  public async addCar(newCarData: NewCarInput): Promise<Car> {
    const newCar = this.carRepository.create(newCarData);
    await this.carRepository.save(newCar).catch((err) => {
      new InternalServerErrorException();
    });

    return newCar;
  }
}
