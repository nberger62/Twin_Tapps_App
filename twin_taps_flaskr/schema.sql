DROP TABLE IF EXISTS twin_taps_beers;
DROP TABLE IF EXISTS twin_taps_foods;

CREATE TABLE twin_taps_beers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL,
  price INTEGER NOT NULL,
  style TEXT NOT NULL,
  abv FLOAT NOT NULL
);

INSERT INTO twin_taps_beers (name, price, style, abv) VALUES('Cookie Monster Stout', 5, 'stout', 5.5);
INSERT INTO twin_taps_beers (name, price, style, abv) VALUES('American Ale', 6, 'amber', 5.0);
INSERT INTO twin_taps_beers (name, price, style, abv) VALUES('Friday IAP', 5, 'ipa', 6.5);
INSERT INTO twin_taps_beers (name, price, style, abv) VALUES('Darkness', 8, 'imperial stout', 9.5);

CREATE TABLE twin_taps_food (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL
);

INSERT INTO twin_taps_food (name) VALUES('Korean BBQ tacos');
INSERT INTO twin_taps_food (name) VALUES('Feel the Heat tacos');
INSERT INTO twin_taps_food (name) VALUES('Taste of Mexico tacos');
INSERT INTO twin_taps_food (name) VALUES('All American tacos');
INSERT INTO twin_taps_food (name) VALUES('All the Veggies tacos');
INSERT INTO twin_taps_food (name) VALUES('Breakfast tacos');
INSERT INTO twin_taps_food (name) VALUES('Athens tacos');
INSERT INTO twin_taps_food (name) VALUES('CHicken tacos');
