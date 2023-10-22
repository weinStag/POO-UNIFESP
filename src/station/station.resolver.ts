import { StationRepository } from './repository/station.repository';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { stationInput } from './input/station.input';
import { stationSchema } from './schema/station.schema';

@Resolver()
export class StationResolver{
    constructor(private stationRepository: StationRepository) {}

    
}