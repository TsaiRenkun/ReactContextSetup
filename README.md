# TEMPLATE FOR MERN STACK
## using Context

Application used for testing and setting up

POSTMAN (To allow testing of connection between application and MONGOdb)

Some npm install commands (dependencies):
```
express (Web frame work)
bcryptjs(hashing)
jsonwebtoken (Authentication)
config (global var)
express-validator (to verify input)
mongose (deal with data, Create models)
```

Some basic npm install commands (dev-dependencies):
```
nodemon 
concurrently
```

## File Setup for server side
create Server.js 
```
const express = require('express');

const app = express();

//Connect Db
connectDB();

app.get("/", (req, res) =>
    res.json({ msg: "Welcome to the contact Keeper API" })
);

//Define Routes

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```

BackEnd routes
Create Routes folder 
 -Create route files inside
 -define your routes in the server.js

 Create Config Folder 
 -default.json (To have your secrets stuff & to get acces to MongoDB)
 -db.js (set up your connection with MongoDB)

 Create Model Folder (As many as your project requires)
 - name.js 

 Create Middleware
 - sets up authentication
 Helps you to verify loged in user. if Jwtoken exist


## Client side
Some npm install commands

```
npx create-react-app client
```
after that added some stuff into server package.json

then create a proxy on the client side package.json

install the tools and dependences you need for your client side 

Create a basic file structure for context 