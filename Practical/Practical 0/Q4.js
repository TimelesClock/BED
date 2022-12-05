function calculateMean(numbers){
    var sum = 0
    for (var i of numbers){
        sum += i
    }
    return sum/numbers.length
}

const numbers = [1,2,3,4,5]
console.log(calculateMean(numbers))