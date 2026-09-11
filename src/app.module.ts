import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersController } from './users/users.controller.js';
import { UsersModule } from './users/users.module.js';
import { ProductsController } from './products/products.controller.js';
import { ProductsService } from './products/products.service.js';
import { ProductsModule } from './products/products.module.js';
import { DatabaseService } from './database/database.service.js';
import { DatabaseModule } from './database/database.module.js';

@Module({
  imports: [UsersModule, ProductsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
