

var formula = require('./formula');
formula.mulFn(Infinity, Infinity, (err, result) => {
    if (err)
        console.log(err.message);
    else
        console.log(result);
}

);
console.log("Waiting for result…");
