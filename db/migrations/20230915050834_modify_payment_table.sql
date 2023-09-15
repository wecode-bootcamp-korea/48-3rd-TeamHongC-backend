-- migrate:up
ALTER TABLE payment ADD user_id INT NOT NULL AFTER id;
ALTER TABLE payment CHANGE purchase_item_id item_id INT NOT NULL AFTER user_id;
ALTER TABLE payment ADD total_price INT NOT NULL AFTER item_id;
ALTER TABLE payment ADD is_paid INT DEFAULT 0 AFTER total_price;
ALTER TABLE payment ADD CONSTRAINT fk_users_payment
    FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE payment ADD CONSTRAINT fk_items_payment
    FOREIGN KEY (item_id) REFERENCES items(id);

-- migrate:down
ALTER TABLE payment DROP user_id;
ALTER TABLE payment DROP item_id;
ALTER TABLE payment DROP total_price;
ALTER TABLE payment DROP is_paid;
ALTER TABLE payment ADD purchase_item_id INT NOT NULL;
ALTER TABLE purchase_item ADD CONSTRAINT fk_purchase_item_payment
    FOREIGN KEY (payment_id) REFERENCES payment(id);
