import { StationTypeRepository } from './repository/station-type.repository';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { StationTypeInput } from './input/station-type.input';
import { StationTypeSchema } from './schema/station-type.schema';

@Resolver()
export class StationTypeResolver {
  constructor(private stationTypeRepository: StationTypeRepository) {}

  @Query(() => StationTypeSchema)
  async findTyepeByID(
    @Args('id', { type: () => String }) id: string,
    @Args('typ_id', { type: () => String }) typ_id: string,
  ): Promise<StationTypeSchema> {
    return this.stationTypeRepository.find(id, typ_id);
  }

  @Mutation(() => StationTypeSchema)
  async addStationType(@Args('stn_typ', { type: () => StationTypeInput }) stn_typ: StationTypeInput): Promise<void> {
    this.stationTypeRepository.add(stn_typ);
  }

  @Mutation(() => StationTypeSchema)
  async removeStn_typByID(
    @Args('id', { type: () => String }) id: string,
    @Args('typ_id', { type: () => String }) typ_id: string,
  ): Promise<void> {
    this.stationTypeRepository.remove(id, typ_id);
  }

  @Query(() => [StationTypeSchema])
  async listStn_typ(): Promise<StationTypeSchema[]> {
    return this.stationTypeRepository.list();
  }

  @Mutation(() => StationTypeSchema)
  async updateStn_typ(@Args('stn_typ', { type: () => StationTypeInput }) newStn_typ: StationTypeSchema): Promise<void> {
    this.stationTypeRepository.update(newStn_typ);
  }
}
