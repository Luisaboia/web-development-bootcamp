// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
let bottlesOfMilk = 99

function bottles() {
  while (bottlesOfMilk >= 2) {
    bottlesOfMilk--
    console.log(
      `${bottlesOfMilk} bottles of beer on the wall, ${bottlesOfMilk} bottles of beer.\nTake one down and pass it around, ${bottlesOfMilk--} bottles of beer on the wall.`
    )
  }
  if (bottlesOfMilk === 1) {
    console.log(
      `1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.`
    )
    bottlesOfMilk--
  }
  if (bottlesOfMilk === 0) {
    console.log(
      `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
    )
  }
}

bottles()
