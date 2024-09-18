import {
  boolean,
  timestamp,
  text,
  varchar,
  numeric,
  pgTable,
  serial,
  uuid,
  pgSchema
} from 'drizzle-orm/pg-core';

const authSchema = pgSchema('auth');

const users = authSchema.table('users', {
  id: uuid('id').primaryKey()
});

export const activity = pgTable('activity', {
  id: serial('id').primaryKey().notNull(),
  label: varchar('label', { length: 256 }).notNull(),
  quickDescription: varchar('quick_description', { length: 500 }).notNull(),
  description: text('description'),
  date: timestamp('timestamp'),
  retired: boolean('retired').default(false),
  pricing: numeric('pricing', { precision: 2 })
});

export const activityImage = pgTable('activity_image', {
  id: serial('id').primaryKey().notNull(),
  label: varchar('label', { length: 256 }).notNull(),
  url: text('url').notNull(),
  activityID: serial('id').references(() => activity.id, { onDelete: 'cascade' })
});

export const carouselImage = pgTable('carousel', {
  id: serial('id').primaryKey().notNull(),
  label: varchar('label').notNull(),
  url: text('url').notNull()
});

export const userProfiles = pgTable('profile', {
  id: uuid('id')
    .primaryKey()
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  firstname: varchar('firstname', { length: 256 }).notNull(),
  lastname: varchar('lastname', { length: 256 }).notNull(),
  picture: text('picture')
});
