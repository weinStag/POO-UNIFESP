import { StationRepository } from './repository/station.repository';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { stationInput } from './input/station.input';
import { StationSchema } from './schema/station.schema';

@Resolver()
export class StationResolver {
  constructor(private stationRepository: StationRepository) {}

  @Query(() => StationSchema)
  async findStationByID(@Args('id', { type: () => String }) id: string): Promise<StationSchema> {
    return this.stationRepository.find(id);
  }

  @Mutation(() => StationSchema)
  async addStation(@Args('station', { type: () => stationInput }) station: stationInput): Promise<void> {
    this.stationRepository.add(station);
  }

  @Mutation(() => StationSchema)
  async removeStationByID(@Args('id', { type: () => String }) id: string): Promise<void> {
    this.stationRepository.remove(id);
  }

  @Query(() => [StationSchema])
  async listStations(): Promise<StationSchema[]> {
    return this.stationRepository.list();
  }

  @Mutation(() => StationSchema)
  async updateStation(@Args('station', { type: () => stationInput }) newStation: StationSchema): Promise<void> {
    this.stationRepository.update(newStation);
  }
}
