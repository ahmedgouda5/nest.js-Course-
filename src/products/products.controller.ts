import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  private products = [
    { id: 'product-1', name: 'Product 1', price: 10 },
    { id: 'product-2', name: 'Product 2', price: 20 },
    { id: 'product-3', name: 'Product 3', price: 30 },
  ];
  @Get('/api/product')
  getAllProducts() {
    return this.productsService.getAllProducts();
  }
}
