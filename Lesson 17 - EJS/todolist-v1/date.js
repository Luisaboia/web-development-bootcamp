// Create a module to get the date, using everywhere on our project.
exports.getDate = function () {
  // Get the Day using the Date object
  const day = new Date()
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }
  return day.toLocaleDateString('en-US', options)
}

// Create a module to get the weekday, using everywhere on our project.
exports.getDay = function () {
  const day = new Date()
  const options = {
    weekday: 'long'
  }
  return day.toLocaleDateString('en-US', options)
}
