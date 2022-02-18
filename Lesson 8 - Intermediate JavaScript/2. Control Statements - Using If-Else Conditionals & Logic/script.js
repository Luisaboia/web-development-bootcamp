const nameOne = prompt("What's your name?")
const nameTwo = prompt("Right, now, what's your partner name?")

let n = Math.random()
n = n * 101
n = Math.floor(n)

if (n >= 70) {
  alert(
    `It seems that you, ${nameOne}, and ${nameTwo} has ${n}% of love. Congratulations!!!!`
  )
} else if (50 <= n && n <= 69) {
  alert(
    `It seems that you, ${nameOne}, and ${nameTwo} has ${n}% of love. That's Okay!!`
  )
} else if (20 <= n && n <= 49) {
  alert(
    `It seems that you, ${nameOne}, and ${nameTwo} has ${n}% of love. So... That's not so nice...`
  )
} else {
  alert(
    `It seems that you, ${nameOne}, and ${nameTwo} has ${n}% of love. That's over.`
  )
}
