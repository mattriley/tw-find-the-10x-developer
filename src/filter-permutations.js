const permute = require('./permute');

module.exports = (arr, predicates) =>
    permute(arr).filter(permutation => predicates.every(predicate => predicate(permutation)));
