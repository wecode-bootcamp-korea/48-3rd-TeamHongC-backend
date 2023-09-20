-- migrate:up
ALTER TABLE payment DROP FOREIGN key payment_id_fk;
ALTER TABLE purchase_item DROP FOREIGN key fk_purchase_item_payment;

-- migrate:down

