import { TypeRepository } from './repository/type.repository';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { typeInput } from './input/type.input';
import { typeSchema } from './schema/type.schema';

@Resolver()
export class TyperResolver{
    constructor(private stationRepository: TypeRepository) {}

    
}