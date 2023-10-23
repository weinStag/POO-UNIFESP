import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class typeInput {
  @Field({ description: 'type id' })
  id: string;

  @Field({ description: 'type description' })
  description: string;
}
