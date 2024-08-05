const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }

    let arr = [0, 1]; // -> array[0] = 0, array[1] = 1
    for (let i = 1; i < number; i++) {
        arr.push(arr[i-1] + arr[i]) // -> array[2] = 1 
    }
    return arr[number];
};

// Do not edit below this line
module.exports = fibonacci;
