const removeFromArray = function(array, ...numbers) {

    for (number of numbers) {
        for (let i = array.length - 1; i >= 0; i--) { // reverse loop necessary to delete multiple of the same array values
            if (array[i] === number) {
                array.splice(i,1);
            }
        }
    }
    return array;
};

// see model solution for alternative, shorter solutions

// Do not edit below this line
module.exports = removeFromArray;
