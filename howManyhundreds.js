function howManyHundreds(num) {
  var division = num / 100; // first we divide by 100 to see how many hundereds there are
  var removeDecimals = Math.floor(division) // then remove decimals
  return removeDecimals
}

console.log(howManyHundreds(17477))

