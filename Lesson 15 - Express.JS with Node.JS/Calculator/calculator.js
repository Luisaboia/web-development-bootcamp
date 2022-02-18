const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/index.html`)
})

app.get('/bmiCalculator', function (req, res) {
  res.sendFile(`${__dirname}/bmiCalculator.html`)
})

app.post('/bmiCalculator', function (req, res) {
  let weight = Number(req.body.weight)
  let height = Number(req.body.height)
  const result = Math.floor(weight / Math.pow(height, 2))
  res.send(`Your BMI is: ${result}`)
})

app.listen(port, function () {
  console.log(`Server started on port ${port}`)
})
