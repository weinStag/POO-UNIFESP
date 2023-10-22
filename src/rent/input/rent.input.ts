import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class RentInput {
  @Field({ description: 'Rent ID' })
  id: string;

  @Field(() => Float, { description: 'Rent value' })
  value: number;

  @Field(() => Date, { description: 'Rent start date' })
  startDate: Date;

  @Field(() => Date, { description: 'Rent end date' })
  endDate: Date;

  @Field(() => Float, { description: 'Rent rating value' })
  ratingValue: number;

  @Field({ description: 'Rent rating comment' })
  ratingComment: string;

  @Field({ description: 'Rent bike ID' })
  bikeId: string;

  @Field({ description: 'Rent user ID' })
  userId: string;

  @Field({ description: 'Rent station ID' })
  stationId: string;
}
