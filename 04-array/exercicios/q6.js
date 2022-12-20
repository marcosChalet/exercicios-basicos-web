function reverte(arg) {
  result = typeof arg

  if (result === 'boolean') {
    return !arg
  }else if (result === 'number') {
    return -arg
  }else {
    return 'booeano ou números, mas o parâmetro é do tipo string'
  }
}

console.log(reverte(true))
console.log(reverte(3))
console.log(reverte("3"))
