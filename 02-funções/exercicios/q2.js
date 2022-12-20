func = (l1 ,l2, l3) => {
  if (l1 === l2 && l1 === l3 && l2 === l3) {
    console.log('Equilátero')
  }else if(l1 === l2 || l1 === l3 || l2 === l3) {
    console.log('Isosceles')
  }else if(l1 !== l2 || l1 !== l3 || l2 !== l3) {
    console.log('Escaleno')
  }
}

func(1,2,4)
