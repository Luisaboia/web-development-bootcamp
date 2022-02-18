const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const https = require('https')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/index.html`)
})

app.post('/', function (req, res) {
  const city = req.body.cityName
  const key = '85dd9d165379b48f26d240f7aab18f5b'
  const unit = 'metric'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${unit}`
  https.get(url, function (response) {
    console.log(response.statusCode)
    response.on('data', function (data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const description = weatherData.weather[0].description
      const icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
      res.write(`<p>The weather is currently ${description}</p>`)
      res.write(`<h1>The ${city} temperature is ${temp} degrees Celsius.</h1>`)
      res.write(`<img src='${icon}' alt='weather'>`)
      res.send()
    })
  })
})

app.listen(port, function () {
  console.log(`Server is running on port ${port}`)
})
