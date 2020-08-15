# eat-da-burger

This is an application that uses the Model View Controller along with MySQL to allow the user to add different burgers to a list of options to devour. The ORM is custom built by the developer to allow access to MySQL via queries for displaying all, posting a burger, and updating a burger to set devoured to true. A series of callback functions pass this information from the ORM to the model to the controller, featuring the API routes for get, pust, and put. The front end feature handlebars to generate a block of devoured burgers with a devour button, which uses an id assigned by SQL. This was a learning exercise to develop a deeper understanding of the MVC, as well as MySQL and Handlebars.


![ScreenShot](https://github.com/paulsloderbeck/eat-da-burger/blob/master/screenshot.png)