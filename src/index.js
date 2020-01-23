const express = require('express')
const Text = require('./db/models/text')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/texts', async (request, response) => {
  let listOfTexts = await Text.find()
  return response.send({ text: listOfTexts })
})

app.listen(port, () => {
  console.log(`Server is ON and running on port ${port}`)
})