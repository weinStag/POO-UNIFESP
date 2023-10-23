import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class stn_typSchema{
    @Field({ description: 'station id' })
    stn_id: string;

    @Field({ description: 'type id' })
    type_id: string;

    @Field({ description: 'capacity for a certain bike type' })
    bikeCapacity: number;

    @Field({ description: 'station type description' })
    description: string;
}