import { UserResolver } from './../user/user.resolver';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RentInput } from './input/rent.input';
import { RentRepository } from './repository/rent.repository';
import { RentSchema } from './schema/rent.schema';

@Resolver()
export class RentResolver {
  constructor(
    private rentRepository: RentRepository,
    private userResolver: UserResolver,
  ) {}

  @Mutation(() => RentSchema)
  async addRent(@Args('rent', { type: () => RentInput }) rent: RentInput): Promise<void> {
    this.rentRepository.add(rent);
  }

  @Query(() => RentSchema)
  async findOpenRentByID(@Args('id', { type: () => String }) id: string): Promise<RentSchema> {
    return this.rentRepository.find(id);
  }

  @Mutation(() => RentSchema)
  async updateRent(@Args('rent', { type: () => RentInput }) rentNew: RentInput): Promise<void> {
    this.rentRepository.update(rentNew);
  }

  @Query(() => [RentSchema])
  async findOpenRentsFor(@Args('userEmail', { type: () => String }) userEmail: string): Promise<RentSchema[]> {
    const userId = await this.userResolver.findUserByEmail(userEmail);
    return this.rentRepository.findOpenRentsFor(userId);
  }

  @Query(() => RentSchema)
  async findRentById(@Args('id', { type: () => String }) id: string): Promise<RentSchema> {
    return this.rentRepository.find(id);
  }

  @Query(() => [RentSchema])
  async listRents(): Promise<RentSchema[]> {
    return this.rentRepository.list();
  }

  @Mutation(() => RentSchema)
  async removeRentByID(@Args('id', { type: () => String }) id: string): Promise<void> {
    this.rentRepository.remove(id);
  }
}
