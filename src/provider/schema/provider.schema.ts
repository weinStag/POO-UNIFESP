import { Field, ObjectType } from '@nestjs/graphql';
import { ModelProviderSchema } from 'src/model-provider/schema/model-provider.schema';

@ObjectType()
export class ProviderSchema {
  @Field({ description: 'Provider ID' })
  id: string;

  @Field({ description: 'Provider name' })
  name: string;

  @Field({ description: 'Provider description' })
  description: string;

  @Field({ description: 'Provider country of origin' })
  countryOfOrigin: string;

  @Field(() => Boolean, { description: 'Provider active' })
  active: boolean;

  @Field(() => [ModelProviderSchema], { description: 'Provider models' })
  models_providers?: ModelProviderSchema[];
}
