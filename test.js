function doTo5(anything) {
  return anything(5)
}

function divide10ByN(n) {
  return 10 / n
}
 
doTo5(divide10ByN) // 2