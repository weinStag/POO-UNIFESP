import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class stationInput{
    @Field({ description: 'station ID' })
    id: string;

    @Field({ description: 'station name' })
    name: string;

    @Field({ description: 'station location' })
    location: string;

    @Field({ description: 'station active' })
    active: boolean;
}