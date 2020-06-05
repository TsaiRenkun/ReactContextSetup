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

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```

BackEnd routes
Create Routes folder 
 -Create route files inside
 -define your routes in the server.js