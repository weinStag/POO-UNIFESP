import { Field, ObjectType } from '@nestjs/graphql';
import { ModelSchema } from 'src/model/schema/model.schema';
import { providerSchema } from 'src/provider/schema/provider.schema';

@ObjectType()
export class ModelProviderSchema {
  @Field({ description: 'ModelProvider ID' })
  id: string;

  @Field(() => ModelSchema, { description: 'ModelProvider model' })
  model?: ModelSchema;

  @Field({ description: 'ModelProvider model ID' })
  modelId: string;

  @Field(() => providerSchema, { description: 'ModelProvider provider' })
  provider?: providerSchema;

  @Field({ description: 'ModelProvider provider ID' })
  providerId: string;
}
