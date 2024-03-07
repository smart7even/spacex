import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma-old/prisma/client';

@Injectable()
export class OldPrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }

    // async enableShutdownHooks(app: INestApplication) {
    //     this.$on('beforeExit', async () => {
    //         await app.close();
    //     });
    // }
}