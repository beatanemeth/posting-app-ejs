# Posting-App with Session Management - Case Three

**Node.js - Express - EJS**  
**Database: MySQL**

---

## How does it work?

User publishies a post (title and content) and it appears on the blog page.

Functionalities:

- publish post
- edit post
- delete post
- open individual post in single post page
- read more / less
- register
- login
- logout
- conditional content rendering depending on login status

---

## Technical Details

### Node verison used:

- v18.12.0

### MySQL version used:

- v8.0.32-0ubuntu0.22.04.2 for Linux on x86_64 ((Ubuntu))

### Check for dependencies:

- open **package.json** file

### How to install dependencies:

- open Terminal or Command Prompt
- change to working directory (where the file is located)  
  `$ cd /path/to/directory`
- install dependences  
  `$ npm install`
- [install MySQL](https://itslinuxfoss.com/install-set-up-mysql-database-ubuntu-22-04/)

### How to use:

#### Run web server

- open Terminal or Command Prompt
- change to working directory (where the file is located)  
  `$ cd /path/to/directory`  
  `$ npm run dev`
- open the Browser at **localhost:3000**
- when finished with work stop the server  
  `ctrl+C`

#### Run database server

- open one more Terminal or Command Prompt to start **MySQL Shell**
- check the status of the server:  
  `$ sudo systemctl status mysql.service`
- start the server:  
  `$ sudo systemctl start mysql.service`
- check the status of the server again:  
  `$ sudo systemctl status mysql.service`
- get into the interactive MySQL shell on your terminal:  
  `$ sudo mysql -u root -p`  
  `mysql>  `
- [run queries](https://dev.mysql.com/doc/refman/8.0/en/entering-queries.html)
- when finised with work:  
  ` mysql> exit`
- stop the server:  
  `$ sudo systemctl stop mysql.service`
- check the status of the server:  
  `$ sudo systemctl status mysql.service`

#### Notes before creating your database

- Rename the **.envexample** to **.env** and replace with your data

#### Insert initial data into database

- open Terminal or Command Prompt
- change to working directory (where the file is located)  
  `$ cd /path/to/directory`
- create database  
  `$ npm run db`
- create tables and populate with some initial data  
  `$ npm run table`
- check database and tables in MySQL  
  `mysql> show databases;`  
  `mysql> use <database_name>;`  
  `mysql> show tables;`  
  `mysql> describe <table_name>;`  
  `mysql> select * from <table_name>;`
