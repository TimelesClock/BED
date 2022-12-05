function multiplicationTable(n) {
    let final = []
    for (var i = 1; i <= n; i++) {
        let arr = []
        for (var o = 1; o <= n; o++) {
            arr.push(i * o)
        }
        final.push(arr)
    }
    return final
}
console.log(multiplicationTable(12))