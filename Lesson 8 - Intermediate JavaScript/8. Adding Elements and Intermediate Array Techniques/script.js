let numbers = []
let count = 1

function fizzBuzz() {
  numbers.push(count++)
  let input = numbers.length
  if (input % 3 === 0 && input % 5 === 0) {
    numbers.pop()
    numbers.push('FizzBuzz')
  } else if (input % 5 === 0) {
    numbers.pop()
    numbers.push('Buzz')
  } else if (input % 3 === 0) {
    numbers.pop()
    numbers.push('Fizz')
  }
  console.log(numbers)
}
