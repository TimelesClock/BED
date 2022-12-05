formula = {
    mulFn: (x, y, callback) => {
        if (x == Infinity || y == Infinity)
            setTimeout(() =>
                callback(new Error("Input values cannot be infinity!"),
                    null),
                2000);
        else
            setTimeout(() =>
                callback(null, x * y
                ),
                2000);
    },
    addFn: (x, y) => x + y
};
module.exports = formula;