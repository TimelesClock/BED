function bigBus(n){
    let arr = []
    for (var i = 1;i<=n;i++){
        if (i%15 ==0){
            arr.push("BigBus")
        }else if(i%3 == 0){
            arr.push("Big")
        }else if (i%5 == 0){
            arr.push("Bus")
        }else{
            arr.push(i.toString())
        }
    }
    return arr
}

console.log(bigBus(15))