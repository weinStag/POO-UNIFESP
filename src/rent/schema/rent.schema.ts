import { Field, Float, ObjectType } from '@nestjs/graphql';
import { BikeSchema } from 'src/bike/schema/bike.schema';
import { MaintenanceSchema } from 'src/maintenance/schema/maintenance.schema';
import { StationSchema } from 'src/station/schema/station.schema';
import { userSchema } from 'src/user/schema/user.schema';

@ObjectType()
export class RentSchema {
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

  @Field(() => BikeSchema, { description: 'Rent bike' })
  bike?: BikeSchema;

  @Field({ description: 'Rent user ID' })
  userId: string;

  @Field(() => userSchema, { description: 'Rent user' })
  user?: userSchema;

  @Field({ description: 'Rent station ID' })
  stationId: string;

  @Field(() => StationSchema, { description: 'Rent station' })
  station?: StationSchema;

  @Field(() => [MaintenanceSchema], { description: 'Rent maintenances' })
  maintenances?: MaintenanceSchema[];
}
