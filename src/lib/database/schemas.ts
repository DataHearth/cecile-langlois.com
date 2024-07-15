import {
  boolean,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  real,
  json
} from 'drizzle-orm/pg-core';

export const activities = pgTable('activites', {
  id: serial('id').primaryKey(),
  label: varchar('label', { length: 256 }).notNull(),
  description: text('description'),
  date: timestamp('timestamp'),
  retired: boolean('retired').default(false),
  pricing: real('pricing'),
  pictures: json('pictures').$type<{ label: string; link: string }[]>().default([])
});

export const aboutPictures = pgTable('about-pictures', {
  id: serial('id').primaryKey(),
  label: varchar('label', { length: 256 }).notNull(),
  link: text('link').notNull()
});
