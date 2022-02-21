// Express requires.
// Remember: body-parser is deprecated!
const express = require('express')
const app = express()
const port = 3000
const date = require(`${__dirname}/date.js`)
const items = ['Buy Food', 'Cook Food', 'Eat Food']
const workItems = []
// Tip: Use this instead app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({ extended: true }))
// Turns on our CSS
app.use(express.static('public'))
// Set EJS to be our display engine
app.set('view engine', 'ejs')
// Starts on root directory.
app.get('/', function (req, res) {
  // Calls our 'date.js' file
  let today = date.getDate()
  // Render a Request using EJS to rename our original list.ejs file with the name of the days on the 'day' array
  res.render('list', { listTitle: today, newItems: items })
})

app.get('/work', function (req, res) {
  res.render('list', { listTitle: 'Work List', newItems: workItems })
})

app.get('/about', function (req, res) {
  res.render('about')
})

app.post('/', function (req, res) {
  // Send the newItem content to our array
  let item = req.body.newItem
  if (req.body.list === 'Work') {
    workItems.push(item)
    // When a post request is required, we'll save the value of new item and REDIRECT to our root route
    res.redirect('/work')
  } else {
    items.push(item)
    res.redirect('/')
  }
})

app.post('/work', function (req, res) {
  let item = req.body.newItem
  workItems.push(item)
  res.redirect('/work')
})

// Log when server is on.
app.listen(port, function () {
  console.log(`The server started on port ${port}`)
})
