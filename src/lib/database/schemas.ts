import { text, real, sqliteTable, int } from 'drizzle-orm/sqlite-core';

export const activities = sqliteTable('activities', {
  id: int('id').primaryKey(),
  label: text('label', { length: 256 }).notNull(),
  description: text('description'),
  date: int('timestamp', {
    mode: 'timestamp'
  }),
  retired: int('retired', { mode: 'boolean' }).default(false),
  pricing: real('pricing'),
  pictures: text('pictures', {
    mode: 'json'
  })
    .$type<{ label: string; link: string }[]>()
    .default([])
});
