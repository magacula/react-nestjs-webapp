import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(1000)
  @Min(10)
  dailyPrice: number;

  @Max(20000)
  @Min(1500, { message: "monthly price can't be that low" })
  @Field((type) => Int)
  monthlyPrice: number;

  @Field()
  mileage: string;

  @Field()
  gearType: string;

  @Field()
  gas: string;

  @Field()
  thumbnailSrc: string;
}
