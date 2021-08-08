import { CreateUserDto, UserDto } from './dto';
import { IUserService } from './interface';

class UserService implements IUserService {
  async createUser(req: CreateUserDto): Promise<UserDto | null> {
    console.log('Calling create method in user Service', req);
    return null;
  }
}
export default <IUserService>new UserService();
