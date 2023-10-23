import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StationTypeInput {
  @Field({ description: 'station id' })
  stationId: string;

  @Field({ description: 'type id' })
  typeId: string;

  @Field({ description: 'capacity for a certain bike type' })
  bikeCapacity: number;

  @Field({ description: 'station type description' })
  description: string;
}
