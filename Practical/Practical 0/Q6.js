function twoSum(numbers, sum){
    for (var i = 0;i < numbers.length;i++){
        for (var o = 0;o < numbers.length;o++){
            if (numbers[i] + numbers[o] === sum){
                return [i,o]
            }
        }
    }
    return -1
}

const numbers = [2,8,11,13]
console.log(twoSum(numbers,19))