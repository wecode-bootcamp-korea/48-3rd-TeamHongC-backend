-- migrate:up
CREATE TABLE users (
  id integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  agree_id int DEFAULT 1,
  name varchar(255) NOT NULL,
  email varchar(100) NOT NULL,
  password varchar(200) NOT NULL,
  nickname varchar(100) NOT NULL,
  phonenumber varchar(100) NOT NULL,
  point int DEFAULT 100000,
  ceo_number varchar(255),
  location varchar(255),
  is_hong tinyint DEFAULT (false),
  profile_image varchar(150) DEFAULT "default url",
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  updated_at timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp,
  constraint users_agree_id_fk FOREIGN KEY (agree_id) REFERENCES agrees (id)
);

-- migrate:down
DROP TABLE users 
