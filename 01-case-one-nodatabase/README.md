# Posting-App with Session Management - Case One

**Node.js - Express - EJS**  
**Database: None**

---

## How does it work?

User publishies a post (title and content) and it appears on the blog page.

Functionalities:

- publish post
- open individual post in single post page
- read more / less
- register
- login
- logout
- conditional content rendering depending on login status

You can try out login with already registered user:

- tom@mail.com
- 1234

Try to reach **localhost:3000/createpost** when you are logged in or not.

---

## Technical Details

### Node version used:

v18.12.0

### Check for dependencies:

- open **package.json** file

### How to install dependencies:

- open Terminal or Command Prompt
- change to working directory (where the file is located)  
  `$ cd /path/to/directory`
- install dependences  
  `$ npm install`

### How to use:

#### Run web server

- open Terminal or Command Prompt
- change to working directory (where the file is located)  
  `$ cd /path/to/directory`  
  `$ npm run dev`
- open the Browser at **localhost:3000**
