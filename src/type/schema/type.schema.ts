import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class typeSchema{
    @Field({ description: 'type id' })
    id: string;

    @Field({ description: 'type description' })
    description: string;
}