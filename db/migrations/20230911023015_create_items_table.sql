-- migrate:up
CREATE TABLE items (
  id integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  category_id int NOT NULL,
  user_id int NOT NULL,
  item_description text,
  item_condition tinyint NOT NULL,
  title varchar(255) NOT NULL,
  price int NOT NULL,
  item_count int NOT NULL DEFAULT 1,
  longitude decimal(25, 15) NOT NULL,
  latitude decimal(25, 15) NOT NULL,
  region text NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  updated_at timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp,
  constraint items_user_id_fk FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE items
