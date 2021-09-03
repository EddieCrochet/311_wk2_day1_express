
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

/* BEGIN - create routes here */

/***
 * * GET /users
 * Give your server the ability to respond to a GET request with a path "/users" 
 * and return the users array from state.js 
 */

app.get("/users", (req, res) => {
  return res.json(users);
});

/***
 * * GET /users/1
    * Give your server the ability to respond to a GET request with a path "/users/1"
    *  and return the first user object from the users array from state.js
    * we will use path parameters to achieve this
 */

 app.get("/user/:id", (req, res) => {
  return res.json(users);
});

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))