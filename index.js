// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(kitten) {
  kittens.push(kitten)
  return kittens
}
function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  kittens2 = [...kittens, name]
  return kittens2
}
function preprendKitten(name) {
  kittens2 = [name, ...kittens]
  return kittens2
}

