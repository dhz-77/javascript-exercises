const palindromes = function (words) {

    let arr = words.toLowerCase().split("")

    const filteredArray = arr.filter(e => e !== "!" && e !== " " && e !== "." &&  e !== ",")
    // equals: let filteredArray = arr.filter(function(e) { return e !== "!" .... })
    const temp = filteredArray.slice(0); // make a new copy of the array, bc without "slice" method, only a reference to the same array is made, and it will not be protected from changes
    const reversedArray = temp.reverse();

    if (reversedArray.toString() === filteredArray.toString()) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = palindromes;
