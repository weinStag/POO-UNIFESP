import { Stn_typRepository } from './repository/stn_typ.repository';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { stn_typInput } from './input/stn_typ.input';
import { stn_typSchema } from './schema/stn_typ.schema';

@Resolver()
export class Stn_typResolver{
    constructor(private stationRepository: Stn_typRepository) {}

    
}