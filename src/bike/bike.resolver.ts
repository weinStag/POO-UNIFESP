import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { BikeSchema } from './schema/bike.schema';
import { BikeInput } from './input/bike.input';
import { BikeRepository } from './repository/bike.repository';
import { BikeNotFoundError } from 'src/errors/bike-not-found-error';

@Resolver()
export class BikeResolver {
  constructor(private bikeRepository: BikeRepository) {}

  @Query(() => BikeSchema)
  async findBikeByID(@Args('id', { type: () => String }) id: string): Promise<BikeSchema> {
    const bike = await this.bikeRepository.find(id);
    if (!bike) throw new BikeNotFoundError();
    return bike;
  }

  @Mutation(() => BikeSchema)
  async registerBike(@Args('bike', { type: () => BikeInput }) bike: BikeInput): Promise<void> {
    this.bikeRepository.add(bike);
  }

  @Mutation(() => BikeSchema)
  async removeBikeByID(@Args('id', { type: () => String }) id: string): Promise<void> {
    this.bikeRepository.remove(id);
  }

  @Query(() => [BikeSchema])
  async listBikes(): Promise<BikeSchema[]> {
    return this.bikeRepository.list();
  }

  @Mutation(() => BikeSchema)
  async updateBike(@Args('bike', { type: () => BikeInput }) bikeNew: BikeInput): Promise<void> {
    this.bikeRepository.update(bikeNew);
  }
}
