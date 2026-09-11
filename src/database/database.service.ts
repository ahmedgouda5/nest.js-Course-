import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import pg from 'pg';

import * as usersSchema from './schema/users.schema.js';
import * as productsSchema from './schema/products.schema.js';

const schema = { ...usersSchema, ...productsSchema };

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private pool: pg.Pool;
  public db: NodePgDatabase<typeof schema>;

  async onModuleInit() {
    this.pool = new pg.Pool({
      host: 'localhost',
      port: 5433,
      user: 'eduvision',
      password: 'Ahmed@123',
      database: 'eduvision',
    });

    this.db = drizzle(this.pool, { schema });
    console.log('✅ Database connected successfully');
  }

  async onModuleDestroy() {
    await this.pool.end();
    console.log('🔌 Database connection closed');
  }
}
