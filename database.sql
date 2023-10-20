
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
    "user_id" INT REFERENCES "user" NOT NULL,
    "poster_img" VARCHAR (150) NOT NULL,
    "description" VARCHAR (1500) NOT NULL,
    "date" date NOT NULL 
);

CREATE TABLE "poster_content" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user" NOT NULL,
    "poster_id" INT REFERENCES "posters" NOT NULL,
    "images" VARCHAR (150) NOT NULL,
    "memory" VARCHAR (1500) NOT NULL,
);

INSERT INTO "posters" ("user_id", "poster_img", "description", "date")
VALUES (2, 'IMG_3635.JPG', 'In a secret alaxy far far away- where everyone is treated equal. People are just people. Love is music. Hate is fleeting. Bootie is God. Note: this event happened multiple Saturdays in 2017', '2017-04-17');