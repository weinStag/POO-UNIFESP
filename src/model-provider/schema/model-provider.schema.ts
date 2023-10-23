import { Field, ObjectType } from '@nestjs/graphql';
import { ModelSchema } from 'src/model/schema/model.schema';
import { ProviderSchema } from 'src/provider/schema/provider.schema';

@ObjectType()
export class ModelProviderSchema {
  @Field({ description: 'ModelProvider ID' })
  id: string;

  @Field(() => ModelSchema, { description: 'ModelProvider model' })
  model?: ModelSchema;

  @Field({ description: 'ModelProvider model ID' })
  modelId: string;

  @Field(() => ProviderSchema, { description: 'ModelProvider provider' })
  provider?: ProviderSchema;

  @Field({ description: 'ModelProvider provider ID' })
  providerId: string;
}
