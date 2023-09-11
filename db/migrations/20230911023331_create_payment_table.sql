-- migrate:up
CREATE TABLE payment (
  id int PRIMARY KEY NOT NULL,
  payment_type varchar(255),
  payment_number varchar(255),
  purchase_item_id int NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  updated_at timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp,
  constraint payment_id_fk FOREIGN KEY (purchase_item_id) REFERENCES purchase_item (id)
);

-- migrate:down
DROP TABLE payment
