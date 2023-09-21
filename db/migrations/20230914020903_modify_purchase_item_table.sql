-- migrate:up
ALTER TABLE purchase_item CHANGE item_id payment_id INT NOT NULL;
ALTER TABLE purchase_item ADD CONSTRAINT fk_purchase_item_payment
    FOREIGN KEY (payment_id) REFERENCES payment(id);


-- migrate:down

