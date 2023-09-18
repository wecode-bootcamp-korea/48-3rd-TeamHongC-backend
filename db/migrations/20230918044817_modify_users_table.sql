-- migrate:up
ALTER TABLE users MODIFY password varchar(200);
ALTER TABLE users MODIFY name varchar(255);
ALTER TABLE users MODIFY phonenumber varchar(100);


-- migrate:down
ALTER TABLE users MODIFY password varchar(200) NOT NULL;
ALTER TABLE users MODIFY name varchar(255) NOT NULL;
ALTER TABLE users MODIFY phonenumber varchar(100) NOT NULL;

