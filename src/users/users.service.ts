import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getAllUsers() {
    return [
      { id: 1, name: 'User 1', email: 'ahmed@gmail.com' },
      { id: 2, name: 'User 2', email: 'sara@gmail.com' },
      { id: 3, name: 'User 3', email: 'jamel@gmail.com' },
    ];
  }
}
