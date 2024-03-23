-- migrate:up
CREATE TABLE reviews (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  item_id int NOT NULL,
  user_id int NOT NULL,
  content varchar(255) NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  updated_at timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp,
  constraint reviews_user_id_fk FOREIGN KEY (user_id) REFERENCES users (id),
  constraint reviews_item_id_fk FOREIGN KEY (item_id) REFERENCES items (id)
);

-- migrate:down
DROP TABLE reviews
