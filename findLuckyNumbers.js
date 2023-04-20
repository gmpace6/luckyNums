
function luckyNumbers(n){
    let result = []
    for(let i = n; i > 0; i--){
result.push(Math.floor(Math.random() * 10 + 1))
    }
    return result
}
console.log(luckyNumbers(10))

