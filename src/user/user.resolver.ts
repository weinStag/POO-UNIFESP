import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { userInput } from './input/user.input';
import { userSchema } from './schema/user.schema';

@Resolver()
export class UserResolver {
  users: userSchema[] = [];

  @Query(() => userSchema)
  async findUserByEmail(
    @Args('email', { type: () => String }) email: string,
  ): Promise<userSchema> {
    return this.users.find((user) => user.email === email);
  }

  @Mutation(() => userSchema)
  async addUser(
    @Args('user', { type: () => userInput }) user: userInput,
  ): Promise<void> {
    this.users.push(user);
  }

  @Mutation(() => userSchema)
  async removeUserByEmail(
    @Args('email', { type: () => String }) email: string,
  ): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.email === email);
    if (userIndex !== -1) this.users.splice(userIndex, 1);
  }

  @Query(() => [userSchema])
  async listUsers(): Promise<userSchema[]> {
    return this.users;
  }
}
