// Create an Express server with separate routes for:
// The users:
// GET  /  : To get all the users
// GET  /:id :  To get one user (with the id)
// POST / -> To create a new user
// PUT /:id  :  To edit one user (with the id)
// DELETE  /:id : To delete one user (with the id)
// The orders:
// GET  /  : To get all the orders
// GET  /:id :  To get one order (with the id)
// POST / -> To create a new order
// PUT /:id  :  To edit one order (with the id)
// DELETE  /:id : To delete one order (with the id

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
