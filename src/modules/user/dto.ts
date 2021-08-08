import { IsEmail, IsOptional, IsPhoneNumber, Length } from 'class-validator';

export class CreateUserDto {
  @Length(2, 30)
  fullName: string;

  @IsEmail()
  email: string;
  username: string;

  @IsOptional()
  dateOfBirth: Date;

  @IsPhoneNumber()
  @IsOptional()
  mobilePhone: string;

  @IsOptional()
  profilePicture: string;
}

export class UserDto extends CreateUserDto {
  id: string;
}
