import { Field, Float, ObjectType } from '@nestjs/graphql';
import { BikeSchema } from 'src/bike/schema/bike.schema';
import { RentSchema } from 'src/rent/schema/rent.schema';

@ObjectType()
export class MaintenanceSchema {
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

  @Field(() => BikeSchema, { description: 'Maintenance bike' })
  bike?: BikeSchema;

  @Field({ description: 'Maintenance bike ID' })
  bikeId: string;

  @Field(() => RentSchema, { description: 'Maintenance rent' })
  rent?: RentSchema;

  @Field({ description: 'Maintenance rent ID' })
  rentId?: string;
}
