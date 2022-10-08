import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  private readonly users = [
    {
      firstName: 'Test',
      lastName: 'Account',
      job: 'Developer',
      username: process.env.UN,
      password: process.env.PWD,
    },
  ];

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.users.find((user) => user.username === username);
    if (user && user.password === pass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
