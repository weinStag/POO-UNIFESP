import { StationRepository } from './repository/station.repository';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { stationInput } from './input/station.input';
import { stationSchema } from './schema/station.schema';

@Resolver()
export class StationResolver{
    constructor(private stationRepository: StationRepository) {}

    @Query(() => stationSchema)
    async findStationByID(@Args('id', { type: () => String }) id: string): Promise<stationSchema> {
        return this.stationRepository.find(id);
    }

    @Mutation(() => stationSchema)
    async addStation(@Args('station', { type: () => stationInput }) station: stationInput): Promise<void> {
        this.stationRepository.add(station);
    }

    @Mutation(() => stationSchema)
    async removeStationByID(@Args('id', { type: () => String }) id: string): Promise<void> {
        this.stationRepository.remove(id);
    }

    @Query(() => [stationSchema])
    async listStations(): Promise<stationSchema[]> {
        return this.stationRepository.list();
    }

    @Mutation(() => stationSchema)
    async updateStation(@Args('station', { type: () => stationInput }) newStation: stationSchema): Promise<void> {
        this.stationRepository.update(newStation);
    }
}