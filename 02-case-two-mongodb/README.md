# Posting-App with Session Management - Case Two

**Node.js - Express - EJS**  
**Database: MongoDB**  
 
*** 

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

Try to reach **localhost:3000/blog/createpost** when you are logged in or not.  

***

## Technical Details
### Node verison used: 
- v18.12.0  

### MongoDB version used:
- [MongoDB Community Server](https://www.mongodb.com/what-is-mongodb)  
- v6.0.4

### Check for dependencies:  
- open **package.json** file  
  
### How to install dependencies:  
- open Terminal or Command Prompt  
- change to working directory (where the file is located)  
`$ cd /path/to/directory`
- install dependences  
`$ npm install`  
- install and run MongodDB [depending on your OS](https://www.mongodb.com/docs/v6.0/administration/install-community/)

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
- open one more Terminal or Command Prompt to start **MongoDB Shell**  
- check the status of the server:  
`$ sudo service mongod status`  
- start the server:  
`$ sudo service mongod start`  
- check the status of the server again:  
`$ sudo service mongod status`  
- get into the interactive test shell on your terminal:  
`$ mongosh`  
`test>  `
- [run commands](https://www.mongodb.com/docs/mongodb-shell/run-commands/)  
- [perform CRUD operations](https://www.mongodb.com/docs/mongodb-shell/crud/)  

- when finised with work:  
` test> quit`  
- stop the server:  
`$ sudo service mongod stop`  
- check the status of the server:  
`$ sudo service mongod status`  
 
 #### Insert initial data into database
- open Terminal or Command Prompt  
- change to working directory (where the file is located)  
`$ cd /path/to/directory`  
`$ npm run dbstart`   
- check MongoDB database  
`> show dbs;`  
`> use <database_name>;`  
`> show collections;`  
`> db.collectionName.find();`  
- try out login at **localhost:3000/user**  
    - tom@mail.com  
    - 1234  