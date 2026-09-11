import { Injectable, NotFoundException } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DatabaseService } from '../database/database.service.js';
import { products } from '../database/schema/products.schema.js';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(data: { name: string; description?: string; price: number }) {
    const [product] = await this.databaseService.db
      .insert(products)
      .values(data)
      .returning();
    return product;
  }

  async findAll() {
    return this.databaseService.db.select().from(products);
  }

  async findOne(id: string) {
    const [product] = await this.databaseService.db
      .select()
      .from(products)
      .where(eq(products.id, id));

    if (!product) {
      throw new NotFoundException(`Product with id "${id}" not found`);
    }

    return product;
  }

  async update(
    id: string,
    data: { name?: string; description?: string; price?: number },
  ) {
    const [product] = await this.databaseService.db
      .update(products)
      .set(data)
      .where(eq(products.id, id))
      .returning();

    if (!product) {
      throw new NotFoundException(`Product with id "${id}" not found`);
    }

    return product;
  }

  async remove(id: string) {
    const [product] = await this.databaseService.db
      .delete(products)
      .where(eq(products.id, id))
      .returning();

    if (!product) {
      throw new NotFoundException(`Product with id "${id}" not found`);
    }

    return product;
  }
}
