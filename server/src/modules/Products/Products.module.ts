import { Module } from '@nestjs/common';

import { ProductsController } from './Products.controller';
@Module({
  controllers: [ProductsController],
})
export class ProductsModule {}
