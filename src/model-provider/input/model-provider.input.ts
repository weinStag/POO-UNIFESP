import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ModelProviderInput {
  @Field({ description: 'ModelProvider ID' })
  id: string;

  @Field({ description: 'ModelProvider model ID' })
  modelId: string;

  @Field({ description: 'ModelProvider provider ID' })
  providerId: string;
}
