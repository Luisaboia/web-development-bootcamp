function fibonacciGenerator(n) {
  let Output = [0, 1]

  for (let i = 2; i < n; i++) {
    Output.push(Output[Output.length - 2] + Output[Output.length - 1])
  }
  console.log(Output)
}

fibonacciGenerator(10)
