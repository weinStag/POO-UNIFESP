import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class BikeInput {
  @Field({ description: 'Bike ID' })
  id: string;

  @Field({ description: 'Bike Location' })
  location: string;

  @Field(() => Float, { description: 'Bike max weight' })
  maxWeight: number;

  @Field({ description: 'Bike description' })
  description: string;

  @Field(() => Boolean, { description: 'Bike availability' })
  available: boolean;

  @Field(() => Boolean, { description: 'Bike is active' })
  active: boolean;

  @Field(() => Float, { description: 'Bike value per hour' })
  valuePerHour: number;

  @Field(() => String, { description: 'Bike model' })
  modelId: string;
}
