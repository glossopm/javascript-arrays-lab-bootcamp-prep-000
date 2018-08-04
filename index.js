// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(kitten) {
  kittens.push(kitten)
  return kittens
}
function destructivelyPrependKitten(kitten) {
  kitten.unshift(kitten)
  return kitten
}