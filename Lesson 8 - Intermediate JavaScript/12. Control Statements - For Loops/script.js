let numbers = []

function fizzBuzz() {
  for (let input = 1; input < 101; input++) {
    if (input % 3 === 0 && input % 5 === 0) {
      numbers.push('FizzBuzz')
    } else if (input % 5 === 0) {
      numbers.push('Buzz')
    } else if (input % 3 === 0) {
      numbers.push('Fizz')
    } else {
      numbers.push(input)
    }
  }
  console.log(numbers)
}
