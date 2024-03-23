-- migrate:up
CREATE TABLE agrees (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  terms_service text,
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  updated_at timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp
);

-- migrate:down
DROP TABLE agrees
