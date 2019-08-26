const everyPermutation = require('./every-permutation');

module.exports = (arr, predicates) =>
    everyPermutation(arr).filter(permutation => predicates.every(predicate => predicate(permutation)));
