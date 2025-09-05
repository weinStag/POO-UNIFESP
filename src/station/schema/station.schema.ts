import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StationSchema {
  @Field({ description: 'station id' })
  id: string;

  @Field({ description: 'station name' })
  name: string;

  @Field({ description: 'station location' })
  location: string;

  @Field({ description: 'station active' })
  active: boolean;
}
