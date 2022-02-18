// Dice 1-6
// let n = Math.random()
// n = n * 6
// n = Math.floor(n) + 1

// console.log(n)

const nameOne = prompt("What's your name?")
const nameTwo = prompt("Right, now, what's your partner name?")

let n = Math.random()
n = n * 100
n = Math.floor(n) + 1

alert(`It seems that you, ${nameOne}, and ${nameTwo} has ${n}% of love.`)
