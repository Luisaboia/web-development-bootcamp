// Express requires.
// Remember: body-parser is deprecated!
const express = require('express')
const app = express()
const port = 3000

// Starts on root directory.
app.get('/', function (req, res) {
  const today = new Date()
  if (today.getDay() === 6 || today.getDay() === 0) {
    // You can write multiple res.write() in a document, but only one res.send()
    res.write("It's Weekend!")
  } else {
    // Redirect to index.html
    res.sendFile(`${__dirname}/index.html`)
  }
})

// Log when server is on.
app.listen(port, function () {
  console.log(`The server started on port ${port}`)
})
