function bhaskara(ax2, bx, c) {
  const delta = (bx ** 2) - (4 * ax2 * c)
  const result = []

  if (delta < 0) {
    return "Delta negativo"
  }

  result.push( ((-bx) + Math.sqrt(delta))/(2*ax2) )
  result.push( ((-bx) - Math.sqrt(delta))/(2*ax2) )

  return result
}

console.log(bhaskara(-3, 7, 12))
