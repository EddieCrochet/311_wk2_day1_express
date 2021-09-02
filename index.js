
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
})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))