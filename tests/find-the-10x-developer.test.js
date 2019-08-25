const test = require('tape');
const filterPermutations = require('../src/filter-permutations');
const { notBest, notWorst, betterThan, notDirectlyAbove, notDirectlyBelow } = require('../src/predicates');

test('finds the 10x developer', t => {
    const arr = ['Jessie', 'Evan', 'John', 'Sarah', 'Matt'];
    const predicates = [
        notBest('Jessie'),
        notWorst('Evan'),
        notBest('John'),
        notWorst('John'),
        betterThan('Sarah', 'Evan'),
        notDirectlyBelow('Matt', 'John'),
        notDirectlyAbove('Matt', 'John'),
        notDirectlyBelow('John', 'Evan'),
        notDirectlyAbove('John', 'Evan')
    ];
    const permutations = filterPermutations(arr, predicates);
    const expected = [['Sarah', 'John', 'Jessie', 'Evan', 'Matt']];
    t.same(permutations, expected, 'found the 10x developer!');
    t.end();
});
