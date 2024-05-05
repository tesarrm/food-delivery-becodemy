import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Resolver, Query, Context } from '@nestjs/graphql';
import { UsersService } from './src/users.service';
import { RegisterRepose } from './src/types/user.types';
import { RegisterDto } from './src/dto/user.dto';
import { User } from './src/entities/user.entity';
import { Response } from 'express';

@Resolver('User')
// @UseFilters
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => RegisterRepose)
  async register(
    @Args('registerInput') registerDto: RegisterDto,
    @Context() context: { res: Response },
  ): Promise<RegisterRepose> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please fill the all fields');
    }

    const user = await this.userService.register(registerDto, context.res);

    return { user };
  }

  @Query(() => [User])
  async getUsers() {
    return this.userService.getusers();
  }
}
