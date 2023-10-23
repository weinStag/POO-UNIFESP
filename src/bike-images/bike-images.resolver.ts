import { RentSchema } from 'src/rent/schema/rent.schema';
import { BikeImagesRepository } from './repository/bike-images.repository';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { BikeImagesInput } from './input/bike-images.input';
import { BikeImagesSchema } from './schema/bike-images.schema';

@Resolver()
export class BikeImagesResolver {
  constructor(private bikeImagesRepository: BikeImagesRepository) {}

  @Mutation(() => RentSchema)
  async addBikeImages(@Args('bikeimage', { type: () => BikeImagesInput }) bikeimage: BikeImagesInput): Promise<void> {
    await this.bikeImagesRepository.add(bikeimage);
  }

  @Query(() => RentSchema)
  async findBikeImages(@Args('id', { type: () => String }) id: string): Promise<BikeImagesSchema> {
    return await this.bikeImagesRepository.find(id);
  }

  @Query(() => RentSchema)
  async listBikeImages(): Promise<BikeImagesSchema[]> {
    return await this.bikeImagesRepository.list();
  }

  @Mutation(() => RentSchema)
  async removeBikeImages(@Args('id', { type: () => String }) id: string): Promise<void> {
    await this.bikeImagesRepository.remove(id);
  }

  @Mutation(() => RentSchema)
  async updateBikeImages(
    @Args('bikeimage', { type: () => BikeImagesInput }) bikeimage: BikeImagesInput,
  ): Promise<void> {
    await this.bikeImagesRepository.update(bikeimage);
  }
}
