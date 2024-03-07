import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@prisma/client';
import { Book } from '@prisma-old/prisma/client/';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(): Promise<User[]> {
    return this.appService.getUsers()
  }

  @Get('books')
  getBooks(): Promise<Book[]> {
    return this.appService.getBooks()
  }
}
