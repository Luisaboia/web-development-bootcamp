function whosPaying() {
  let input = ['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe']
  let sort = input[Math.floor(Math.random() * input.length)]

  console.log(`${sort} is going to buy lunch today.`)
}

whosPaying()
