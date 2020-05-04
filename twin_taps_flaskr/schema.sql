DROP TABLE IF EXISTS twin_taps_beers;

CREATE TABLE twin_taps_beers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL
);

INSERT INTO twin_taps_beers (name) VALUES('Cookie Monster Stout');
INSERT INTO twin_taps_beers (name) VALUES('Friday IPA');