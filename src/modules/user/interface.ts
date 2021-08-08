import { CreateUserDto, UserDto } from './dto';

export interface IUserService {
  createUser(req: CreateUserDto): Promise<UserDto | null>;
}
