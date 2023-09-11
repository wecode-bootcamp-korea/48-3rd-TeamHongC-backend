-- migrate:up
CREATE TABLE locations (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  item_id int NOT NULL,
  location_x decimal(25, 15) NOT NULL,
  location_y decimal(25, 15) NOT NULL,
  region text NOT NULL
);
ALTER TABLE items DROP location;

-- migrate:down
DROP TABLE locations;
