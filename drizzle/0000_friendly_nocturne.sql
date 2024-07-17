CREATE TABLE `about-pictures` (
	`id` integer PRIMARY KEY NOT NULL,
	`label` text(256) NOT NULL,
	`link` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `activities` (
	`id` integer PRIMARY KEY NOT NULL,
	`label` text(256) NOT NULL,
	`description` text,
	`timestamp` integer,
	`retired` integer DEFAULT false,
	`pricing` real,
	`pictures` text DEFAULT '[]'
);
