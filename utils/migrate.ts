import 'dotenv/config';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db, client } from './database';

console.log('Starting migration');
try {
  await migrate(db, { migrationsFolder: './drizzle' });
  console.log('Migration applied!');
} catch (err) {
  console.error(`Failed to apply migration: ${err}`);
}

console.log('Closing migration connection');
await client.end();
