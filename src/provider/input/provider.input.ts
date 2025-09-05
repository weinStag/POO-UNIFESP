import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProviderInput {
  @Field({ description: 'Provider ID' })
  id: string;

  @Field({ description: 'Provider name' })
  name: string;

  @Field({ description: 'Provider description' })
  description: string;

  @Field({ description: 'Provider country of origin' })
  countryOfOrigin: string;

  @Field({ description: 'Provider active' })
  active: boolean;
}
