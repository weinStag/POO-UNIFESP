import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StationTypeSchema {
  @Field({ description: 'station id' })
  stationId: string;

  @Field({ description: 'type id' })
  typeId: string;

  @Field({ description: 'capacity for a certain bike type' })
  bikeCapacity: number;

  @Field({ description: 'station type description' })
  description: string;
}
