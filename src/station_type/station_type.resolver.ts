import { Stn_typRepository } from './repository/stn_typ.repository';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { stn_typInput } from './input/stn_typ.input';
import { stn_typSchema } from './schema/stn_typ.schema';

@Resolver()
export class Stn_typResolver{
    constructor(private stn_typRepository: Stn_typRepository) {}

    @Query(() => stn_typSchema)
    async findTyepeByID(
        @Args('stn_id', { type: () => String }) stn_id: string,
        @Args('typ_id', { type: () => String }) typ_id: string,
        ): Promise<stn_typSchema> {
        return this.stn_typRepository.find(stn_id, typ_id);
    }

    @Mutation(() => stn_typSchema)
    async addStn_typ(@Args('stn_typ', { type: () => stn_typInput }) stn_typ: stn_typInput): Promise<void> {
        this.stn_typRepository.add(stn_typ);
    }

    @Mutation(() => stn_typSchema)
    async removeStn_typByID(
        @Args('stn_id', { type: () => String }) stn_id: string,
        @Args('typ_id', { type: () => String }) typ_id: string,
        ): Promise<void> {
        this.stn_typRepository.remove(stn_id, typ_id);
    }

    @Query(() => [stn_typSchema])
    async listStn_typ(): Promise<stn_typSchema[]> {
        return this.stn_typRepository.list();
    }

    @Mutation(() => stn_typSchema)
    async updateStn_typ(@Args('stn_typ', { type: () => stn_typInput }) newStn_typ: stn_typSchema): Promise<void> {
        this.stn_typRepository.update(newStn_typ);
    }
}