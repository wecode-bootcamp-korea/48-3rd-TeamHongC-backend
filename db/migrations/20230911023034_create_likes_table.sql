-- migrate:up
CREATE TABLE likes (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  item_id int NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  constraint likes_user_id_fk FOREIGN KEY (user_id) REFERENCES users (id),
  constraint likes_item_id_fk FOREIGN KEY (item_id) REFERENCES items (id)
);

-- migrate:down
DROP TABLE likes
