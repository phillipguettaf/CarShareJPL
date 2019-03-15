const express = require('express')
const app = express()
const port = 3000


let boardWidth = 7;
let boardHeight = 6;

let sessionCount = 0
let boards = []



app.get('/', (request, response) =>
{
	response.send('Hello from Express!')
})

app.get('/test', (req, response) =>
{
	response.send('You called test!!')
})




app.listen(port, (err) =>
{
  if (err)
    return console.log('something bad happened', err)

  console.log(`server is listening on ${port}`)



})
