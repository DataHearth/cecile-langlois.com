import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import path from 'path';
import fs from 'fs';
import { exit } from 'process';

const getLocalD1DB = () => {
  const basePath = path.resolve('.wrangler');
  const dbFile = fs
    .readdirSync(basePath, { encoding: 'utf-8', recursive: true })
    .find((f) => f.endsWith('.sqlite'));

  if (!dbFile) {
    console.error(`.sqlite file not found in ${basePath}`);
    exit(1);
  }

  return path.resolve(basePath, dbFile);
};

export default defineConfig({
  schema: './src/lib/database/schemas.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: getLocalD1DB()
  }
});
