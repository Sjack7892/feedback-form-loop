-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback

CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" VARCHAR not null,
  "understanding" VARCHAR not null,
  "support" VARCHAR not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
);

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES ('Okay', 'Very Well', 'Well', 'Doing Great!');
