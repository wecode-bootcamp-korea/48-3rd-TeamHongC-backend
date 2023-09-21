-- migrate:up
ALTER TABLE payment CHANGE is_paid pg_token VARCHAR(255) NOT NULL AFTER total_price;
ALTER TABLE payment ADD t_id VARCHAR(200) NOT NULL AFTER pg_token;
-- migrate:down

