function fib(n){
    var arr = [0,1]
    if (n <= 2){
        return n-1
    }
    for (var i = 2;i<=n;i++){
        arr.push(arr[i-1]+arr[i-2])
    }
    return arr[n]
}

console.log(fib(444))