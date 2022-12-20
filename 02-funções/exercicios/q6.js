const f1 = (capital, taxa, tempo) => capital + capital * taxa * tempo
const f2 = (capital, taxa, tempo) => capital * ((1+taxa) ** tempo)

console.log(f1(1000, 0.1, 3))
console.log(f2(1000, 0.1, 3))
