let num = [5, 8, 2, 9, 3]
num[6] = 1
num.push(7)

console.log(`nosso vetor é o ${num}`)

console.log(`nosso vetor tem ${num.length} posições`)

console.log(`em ordem crescente fica: ${num.sort()}`)

console.log(`o primeiro valor do vetor é o ${num[3]}`)

for (let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}