const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('<h1>Hello, World!</h1>')
})
app.get('/contact', function (req, res) {
  res.send('<h1>Contact me at GitHub: Luisaboia</h1>')
})
app.get('/about', function (req, res) {
  res.send(
    'Luis Saboia is a Junior Full-Stack Developer, studying in Angela Yu Bootcamp in Express.JS module.'
  )
})
app.get('/hobbies', function (req, res) {
  res.send('<ul><li>Gaming</li><li>Code</li></ul>')
})
app.listen(3000, function () {
  console.log('Server has started on port 3000')
})
