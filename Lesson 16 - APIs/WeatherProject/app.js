// Express, body-parser and HTTPS Requires
// Tip: Don't use body-parser. It is deprecated now
const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const https = require('https')

// Express declaration
const app = express()
// Tip: Change this line to app.use(express.urlencoded()), it does the same thing without other npm packages and less code.
app.use(bodyParser.urlencoded({ extended: true }))

// GET Request, starts localhost:3000 with index.html
app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/index.html`)
})

// POST Request, after form inputs
app.post('/', function (req, res) {
  // Get the city name
  const city = req.body.cityName
  // The key of your API on 'openweathermap.org'
  const key = '85dd9d165379b48f26d240f7aab18f5b'
  // The unit used to calculate the temperature
  const unit = 'metric'
  // The URL of the API, please check 'openweathermap.org' to see more...
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${unit}`
  https.get(url, function (response) {
    // Logs the HTTP code.
    // Tip: If === 200 (OKAY!); Else if 401 || 404 (NOT OKAY)
    console.log(response.statusCode)
    // Callback function to get the temperature on API
    response.on('data', function (data) {
      // Get the weather data, full document
      const weatherData = JSON.parse(data)
      // Get the temperature on the main document
      const temp = weatherData.main.temp
      // Get the weather description on the main document, searches inside an array
      const description = weatherData.weather[0].description
      // Get the weather icon
      const icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
      // Write these informations on the page
      res.write(`<p>The weather is currently ${description}</p>`)
      res.write(`<h1>The ${city} temperature is ${temp} degrees Celsius.</h1>`)
      res.write(`<img src='${icon}' alt='weather'>`)
      // Confirm and send the informations to the next page
      res.send()
    })
  })
})

// Log the server on port 3000
app.listen(port, function () {
  console.log(`Server is running on port ${port}`)
})
