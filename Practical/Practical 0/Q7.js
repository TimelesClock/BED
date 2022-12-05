function commonCharacters(word1,word2){
    word1 = [...new Set(word1.split(''))]
    word2 = [...new Set(word2.split(''))]
    var arr = []

    for (var i of word1){
        if (word2.includes(i)){
            arr.push(i)
        }
    }
    return arr
}

const word1 = "intestines"
const word2 = "intestines"
console.log(commonCharacters(word1,word2))