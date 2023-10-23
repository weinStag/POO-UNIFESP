import { RentRepository } from './../rent/repository/rent.repository';
import { UserRepository } from './repository/user.repository';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { userInput } from './input/user.input';
import { userSchema } from './schema/user.schema';
import { DuplicateUserError } from 'src/errors/duplicate-user-error';
import { UserNotFoundError } from 'src/errors/user-not-found-error';
import { WrongPasswordError } from 'src/errors/wrong-password-error';
import { UserHasOpenRent } from 'src/errors/user-has-open-rent';
import { CryptService } from 'src/crypt/crypt.service';

@Resolver()
export class UserResolver {
  constructor(
    private userRepository: UserRepository,
    private crypt: CryptService,
    private rentRepository: RentRepository,
  ) {}

  @Query(() => userSchema)
  async findUserByEmail(@Args('email', { type: () => String }) email: string): Promise<userSchema> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new UserNotFoundError();
    return user;
  }

  @Query(() => userSchema)
  async findUserByID(@Args('id', { type: () => String }) id: string): Promise<userSchema> {
    const user = await this.userRepository.findById(id);
    if (!user) throw new UserNotFoundError();
    return user;
  }

  @Mutation(() => userSchema)
  async registerUser(@Args('user', { type: () => userInput }) user: userInput): Promise<void> {
    if (await this.userRepository.findByEmail(user.email)) {
      throw new DuplicateUserError();
    }
    const encryptedPassword = await this.crypt.encrypt(user.password);
    user.password = encryptedPassword;
    await this.userRepository.add(user);
  }

  @Query(() => userSchema)
  async AuthenticateUser(
    @Args('email', { type: () => String }) email: string,
    @Args('password', { type: () => String }) password: string,
  ): Promise<userSchema> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new UserNotFoundError();
    const isPasswordCorrect = await this.crypt.compare(password, user.password);
    if (!isPasswordCorrect) throw new WrongPasswordError();
    return user;
  }

  @Mutation(() => userSchema)
  async removeUserByEmail(@Args('email', { type: () => String }) email: string): Promise<void> {
    await this.findUserByEmail(email);
    if ((await this.rentRepository.findOpenRentsFor(email)).length > 0) throw new UserHasOpenRent();
    await this.userRepository.removeByEmail(email);
  }

  @Query(() => [userSchema])
  async listUsers(): Promise<userSchema[]> {
    return await this.userRepository.list();
  }
}
