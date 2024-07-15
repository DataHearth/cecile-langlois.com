CREATE TABLE IF NOT EXISTS "about-pictures" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" varchar(256) NOT NULL,
	"link" text NOT NULL
);
