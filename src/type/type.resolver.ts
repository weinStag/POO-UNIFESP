import { TypeRepository } from './repository/type.repository';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { typeInput } from './input/type.input';
import { typeSchema } from './schema/type.schema';

@Resolver()
export class TypeResolver {
  constructor(private typeRepository: TypeRepository) {}

  @Query(() => typeSchema)
  async findTyepeByID(@Args('id', { type: () => String }) id: string): Promise<typeSchema> {
    return this.typeRepository.find(id);
  }

  @Mutation(() => typeSchema)
  async addType(@Args('type', { type: () => typeInput }) type: typeInput): Promise<void> {
    this.typeRepository.add(type);
  }

  @Mutation(() => typeSchema)
  async removeTypeByID(@Args('id', { type: () => String }) id: string): Promise<void> {
    this.typeRepository.remove(id);
  }

  @Query(() => [typeSchema])
  async listTypes(): Promise<typeSchema[]> {
    return this.typeRepository.list();
  }

  @Mutation(() => typeSchema)
  async updateType(@Args('type', { type: () => typeInput }) newType: typeSchema): Promise<void> {
    this.typeRepository.update(newType);
  }
}
