import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/prisma.service';
import { OldPrismaService } from 'src/old-prisma.service';

@Module({
    providers: [AppService, PrismaService, OldPrismaService, UsersResolver],
})
export class UsersModule { }