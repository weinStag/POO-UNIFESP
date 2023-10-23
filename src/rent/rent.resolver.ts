import { UserResolver } from './../user/user.resolver';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RentInput } from './input/rent.input';
import { RentRepository } from './repository/rent.repository';
import { RentSchema } from './schema/rent.schema';
import { BikeResolver } from 'src/bike/bike.resolver';
import { UnavailableBikeError } from 'src/errors/unavailable-bike-error';
import { RentNotFoundError } from 'src/errors/rent-not-found-error';

@Resolver()
export class RentResolver {
  constructor(
    private rentRepository: RentRepository,
    private userResolver: UserResolver,
    private bikeResolver: BikeResolver,
  ) {}

  @Mutation(() => RentSchema)
  async rentBike(
    @Args('userId', { type: () => String }) userID: string,
    @Args('bikeId', { type: () => String }) bikeID: string,
    @Args('stationId', { type: () => String }) stationID: string,
  ): Promise<void> {
    const bike = await this.bikeResolver.findBikeByID(bikeID);
    if (!bike.available) {
      throw new UnavailableBikeError();
    }
    bike.available = false;
    await this.bikeResolver.updateBike(bike);
    const newRent = new RentInput(bikeID, userID, stationID, new Date());
    return await this.rentRepository.add(newRent);
  }

  @Mutation(() => RentSchema)
  async returnBike(
    @Args('userId', { type: () => String }) userID: string,
    @Args('bikeId', { type: () => String }) bikeID: string,
  ): Promise<number> {
    const now = new Date();
    const rent = await this.rentRepository.findOpen(bikeID, userID);
    if (!rent) throw new RentNotFoundError();
    rent.endDate = now;
    await this.rentRepository.update(rent);
    rent.bike.available = true;
    await this.bikeResolver.updateBike(rent.bike);
    const hours = this.diffHours(rent.endDate, rent.startDate);
    return hours * rent.bike.valuePerHour;
  }

  @Query(() => RentSchema)
  async findOpenRentByID(@Args('id', { type: () => String }) id: string): Promise<RentSchema> {
    return await this.rentRepository.find(id);
  }

  @Mutation(() => RentSchema)
  async updateRent(@Args('rent', { type: () => RentInput }) rentNew: RentInput): Promise<void> {
    await this.rentRepository.update(rentNew);
  }

  @Query(() => [RentSchema])
  async findOpenRentsFor(@Args('userEmail', { type: () => String }) userEmail: string): Promise<RentSchema[]> {
    const user = await this.userResolver.findUserByEmail(userEmail);
    return await this.rentRepository.findOpenRentsFor(user.id);
  }

  @Query(() => RentSchema)
  async findRentById(@Args('id', { type: () => String }) id: string): Promise<RentSchema> {
    return await this.rentRepository.find(id);
  }

  @Query(() => [RentSchema])
  async listRents(): Promise<RentSchema[]> {
    return await this.rentRepository.list();
  }

  @Mutation(() => RentSchema)
  async removeRentByID(@Args('id', { type: () => String }) id: string): Promise<void> {
    await this.rentRepository.remove(id);
  }

  diffHours(dt2: Date, dt1: Date) {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60;
    return Math.abs(diff);
  }
}
