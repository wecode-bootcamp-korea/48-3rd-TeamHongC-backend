-- migrate:up
CREATE TABLE purchase_item (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  item_id int NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  updated_at timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp,
  constraint purchase_item_item_id_fk FOREIGN KEY (item_id) REFERENCES items (id),
  constraint purchase_item_user_id_fk FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE purchase_item
