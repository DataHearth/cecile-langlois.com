CREATE TABLE IF NOT EXISTS "activites" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" varchar(256) NOT NULL,
	"description" text,
	"timestamp" timestamp,
	"retired" boolean DEFAULT false,
	"pricing" real,
	"pictures" json DEFAULT '[]'::json
);
