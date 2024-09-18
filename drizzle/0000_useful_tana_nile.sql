CREATE TABLE IF NOT EXISTS "activity" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" varchar(256) NOT NULL,
	"description" text,
	"timestamp" timestamp,
	"retired" boolean DEFAULT false,
	"pricing" numeric(2)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "activity_image" (
	"id" serial NOT NULL,
	"label" varchar(256) NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "carousel" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profile" (
	"id" uuid PRIMARY KEY NOT NULL,
	"firstname" varchar(256) NOT NULL,
	"lastname" varchar(256) NOT NULL,
	"picture" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "activity_image" ADD CONSTRAINT "activity_image_id_activity_id_fk" FOREIGN KEY ("id") REFERENCES "public"."activity"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profile" ADD CONSTRAINT "profile_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
