import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/database/schema/*.schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://eduvision:Ahmed%40123@localhost:5433/eduvision',
  },
});
