-- migrate:up
CREATE TABLE item_images (
  id int PRIMARY KEY NOT NULL,
  item_id int NOT NULL,
  img_url varchar(255) NOT NULL,
  constraint item_images_item_id_fk FOREIGN KEY (item_id) REFERENCES items (id)
);

-- migrate:down
DROP TABLE item_images
