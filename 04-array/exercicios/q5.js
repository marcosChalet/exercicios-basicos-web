function f1(a, b){
  if (typeof a != typeof b) {
    return false
  }
  return a >= b
}
console.log(f1(4,3))
