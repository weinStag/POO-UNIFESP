import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class MaintenanceInput {
  @Field({ description: 'Maintenance ID' })
  id: string;

  @Field({ description: 'Maintenance description' })
  description: string;

  @Field(() => Float, { description: 'Maintenance value' })
  value: number;

  @Field(() => Boolean, { description: 'Maintenance was an accident' })
  accident: boolean;

  @Field(() => Date, { description: 'Maintenance start date' })
  startDate: Date;

  @Field(() => Date, { description: 'Maintenance end date' })
  endDate: Date;

  @Field({ description: 'Maintenance bike ID' })
  bikeId: string;

  @Field({ description: 'Maintenance rent ID' })
  rentId?: string;
}
