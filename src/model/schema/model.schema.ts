import { Field, ObjectType } from '@nestjs/graphql';
import { BikeSchema } from 'src/bike/schema/bike.schema';
import { ModelProviderSchema } from 'src/model-provider/schema/model-provider.schema';

@ObjectType()
export class ModelSchema {
  @Field({ description: 'Model ID' })
  id: string;

  @Field({ description: 'Model name' })
  name: string;

  @Field(() => [BikeSchema], { description: 'Model bikes ' })
  bikes?: BikeSchema[];

  @Field(() => [ModelProviderSchema], { description: 'Model providers ' })
  models_providers?: ModelProviderSchema[];
}
