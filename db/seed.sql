USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
VALUES ("Baconator", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("McWhopper", false);


INSERT INTO burgers (burger_name, devoured)
VALUES ("Fish Fillet", true);

select *
from burgers
