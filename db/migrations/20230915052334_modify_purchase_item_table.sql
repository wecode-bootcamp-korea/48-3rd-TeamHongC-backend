-- migrate:up
ALTER TABLE purchase_item DROP FOREIGN key purchase_item_user_id_fk;
ALTER TABLE purchase_item DROP user_id;

-- migrate:down
ALTER TABLE purchase_item ADD user_id INT NOT NULL;

