USE burgers_db;

INSERT INTO burgers (burger_name, devoured) 
VALUES ("Baconator", true);

INSERT INTO burgers (burger_name, devoured) 
VALUES ("Double Quarter Pounder", false);

INSERT INTO burgers (burger_name, devoured) 
VALUES ("Whiskey River BBQ Burger", true);

SELECT * FROM burgers;