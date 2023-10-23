import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class stn_typInput{
    @Field({ description: 'station id' })
    stn_id: string;

    @Field({ description: 'type id' })
    type_id: string;

    @Field({ description: 'capacity for a certain bike type' })
    bikeCapacity: number;

    @Field({ description: 'station type description' })
    description: string;
}