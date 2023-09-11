-- migrate:up
CREATE TABLE items (
  id integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  category_id int NOT NULL,
  user_id int NOT NULL,
  item_description text,
  item_condition tinyint NOT NULL DEFAULT 0,
  title varchar(255) NOT NULL,
  price int NOT NULL,
  item_count int NOT NULL DEFAULT 1,
  location varchar(255),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  updated_at timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp,
  constraint items_user_id_fk FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE items
