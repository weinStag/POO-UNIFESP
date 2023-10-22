import { UserRepository } from './repository/user.repository';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { userInput } from './input/user.input';
import { userSchema } from './schema/user.schema';

@Resolver()
export class UserResolver {
  constructor(private userRepository: UserRepository) {}

  @Query(() => userSchema)
  async findUserByEmail(@Args('email', { type: () => String }) email: string): Promise<string> {
    const user: userSchema = this.userRepository.findByEmail(email);
    return user.id;
  }

  @Mutation(() => userSchema)
  async addUser(@Args('user', { type: () => userInput }) user: userInput): Promise<void> {
    //regra do password
    this.users.push(user);
  }

  @Mutation(() => userSchema)
  async removeUserByEmail(@Args('email', { type: () => String }) email: string): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.email === email);
    if (userIndex !== -1) this.users.splice(userIndex, 1);
  }

  @Query(() => [userSchema])
  async listUsers(): Promise<userSchema[]> {
    return this.users;
  }
}
