import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User } from '@prisma/client';
import { Book } from '@prisma-old/prisma/client/';
import { OldPrismaService } from './old-prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService, private oldPrisma: OldPrismaService) { }

  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  getBooks(): Promise<Book[]> {
    return this.oldPrisma.book.findMany()
  }
}
