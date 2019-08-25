const test = require('tape');
const filterPermutations = require('../src/filter-permutations');

test('finds the reverse permutation', t => {
    const arr = ['foo', 'bar', 'baz'];
    const predicates = [arr => arr[0] === 'baz', arr => arr[1] === 'bar', arr => arr[2] === 'foo'];
    const permutations = filterPermutations(arr, predicates);
    const expected = [['baz', 'bar', 'foo']];
    t.same(permutations, expected, 'reverse permutation was found');
    t.end();
});

test('finds all permutations', t => {
    const arr = ['foo', 'bar'];
    const predicates = [() => true, () => true];
    const permutations = filterPermutations(arr, predicates);
    const expected = [['foo', 'bar'], ['bar', 'foo']];
    t.same(permutations, expected, 'all permutations were found');
    t.end();
});
