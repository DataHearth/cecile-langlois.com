ALTER TABLE "activity" RENAME COLUMN "timestamp" TO "start_dt";--> statement-breakpoint
ALTER TABLE "activity" ADD COLUMN "quick_description" varchar(500) NOT NULL;--> statement-breakpoint
ALTER TABLE "activity" ADD COLUMN "end_dt" timestamp;--> statement-breakpoint
ALTER TABLE "activity" ADD COLUMN "create_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "activity" ADD COLUMN "updated_at" timestamp;