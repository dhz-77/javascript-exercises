const getTheTitles = function(array) {
    const arr = [];
    array.forEach((obj) => arr.push(obj["title"]));
    return arr;
};

// see model solution for alternative function with array.map

// Do not edit below this line
module.exports = getTheTitles;
