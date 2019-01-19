-- oversight_db --
DROP DATABASE oversight_db IF EXISTS;
CREATE DATABASE oversight_db;
USE oversight_db;

-- tracking_table --
DROP TABLE IF EXISTS tracking_table;
CREATE TABLE tracking_table(
id int AUTO_INCREMENT,
user_id NUMERIC(30),
tracking_number VARCHAR(50),
carrier_code VARCHAR(20),
status_code VARCHAR(20),
status_description VARCHAR(50),
carrier_status_code VARCHAR(50),
carrier_status_description VARCHAR(50),
ship_date VARCHAR(50),
estimated_delivery_date VARCHAR(50),
actual_delivery_date VARCHAR(50),
exception_description VARCHAR(50),
events NUMERIC(30),
occurred_at VARCHAR(50),
description VARCHAR(50),
city_locality VARCHAR(50),
state_province VARCHAR(50),
postal_code VARCHAR(20),
country_code VARCHAR(10),
company_name VARCHAR(50),
signer VARCHAR(50),
PRIMARY KEY (id, user_id, tracking_number)
);

SELECT t.tracking_number, t.occurred_at, t.status_description
FROM tracking_table t 
INNER JOIN (
    SELECT tracking_number, max(t.occurred_at) as MaxDate
    FROM tracking_table
    GROUP BY tracking_number
) tm on t.tracking_number = tm.tracking_number and t.occurred_at = tm.MaxDate








-- FOREIGN KEY (user_id) REFERENCES auth_table(user_id)


DROP TABLE IF EXISTS auth_table;
CREATE TABLE auth_table(
   id int NOT NULL AUTO_INCREMENT,
   user_id NUMBER(30),
   email VARCHAR(50),
   user_password VARCHAR(30),
   first_name VARCHAR(30),
   last_name VARCHAR(30),
   PRIMARY KEY (id, user_id)
);

