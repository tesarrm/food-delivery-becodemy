import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({ message: 'Name is required.' })
  @IsString({ message: 'Name must need to be one string' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  @IsString({ message: 'Password must at least 8 characters.' })
  password: string;

  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsString({ message: 'Email is invalid.' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Phone Number is required.' })
  phone_number: number;
}

@InputType()
export class activationDto {
  @Field()
  @IsNotEmpty({ message: 'Activation Token is required.' })
  activationToken: string;

  @Field()
  @IsNotEmpty({ message: 'Activation Code is required.' })
  activationCode: string;
}

@InputType()
export class LoginDto {
  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  password: string;

  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsString({ message: 'Email is invalid.' })
  email: string;
}
