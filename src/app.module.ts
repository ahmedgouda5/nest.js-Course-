import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductsModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://ahmedgoda_CareApp:<Ahmed@123>@cluster0.bkljonh.mongodb.net/',
    ),
  ],
})
export class AppModule {}
