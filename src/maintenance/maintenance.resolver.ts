import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { MaintenanceRepository } from './repository/maintenance.repository';
import { MaintenanceSchema } from './schema/maintenance.schema';
import { MaintenanceInput } from './input/maintenance.input';

@Resolver()
export class MaintenanceResolver {
  constructor(private maintenanceRepository: MaintenanceRepository) {}

  @Mutation(() => MaintenanceSchema)
  async addMaintenance(
    @Args('maintenance', { type: () => MaintenanceInput }) maintenance: MaintenanceInput,
  ): Promise<void> {
    await this.maintenanceRepository.add(maintenance);
  }

  @Query(() => MaintenanceSchema)
  async findMaintenance(@Args('id', { type: () => String }) id: string): Promise<MaintenanceSchema> {
    return await this.maintenanceRepository.find(id);
  }

  @Query(() => MaintenanceSchema)
  async listMaintenances(): Promise<MaintenanceSchema[]> {
    return await this.maintenanceRepository.list();
  }

  @Mutation(() => MaintenanceSchema)
  async removeMaintenance(@Args('id', { type: () => String }) id: string): Promise<void> {
    await this.maintenanceRepository.remove(id);
  }

  @Mutation(() => MaintenanceSchema)
  async updateMaintenance(
    @Args('maintenance', { type: () => MaintenanceInput }) maintenance: MaintenanceInput,
  ): Promise<void> {
    await this.maintenanceRepository.update(maintenance);
  }
}
