const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login", (req, res) => {
  res.send("<h1>Please login</h1>")
})

app.get("/github", (req, res) => {
  res.send("<a href='https://github.com/sameerhamid' target='blank'>git hub</a>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})