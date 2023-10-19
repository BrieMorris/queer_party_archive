
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "posters" (
    "id" SERIAL PRIMARY KEY,
    "user_id" VARCHAR (80) UNIQUE NOT NULL,
    "poster_img" VARCHAR (150) NOT NULL
    "desription" VARCHAR (1500) NOT NULL
    "date" INT NOT NULL
);

CREATE TABLE "poster_content" (
    "id" SERIAL PRIMARY KEY,
    "user_" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);