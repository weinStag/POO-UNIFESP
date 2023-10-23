import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class ModelInput {
  @Field({ description: 'Model ID' })
  id: string;

  @Field({ description: 'Model name' })
  name: string;
}
