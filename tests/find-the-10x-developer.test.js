const test = require('tape');
const filterPermutations = require('../src/filter-permutations');
const parseStatements = require('../src/parse-statements');
const { notBest, notWorst, betterThan, notDirectlyAbove, notDirectlyBelow } = require('../src/predicates');

const assert = (names, facts, t) => {
    const permutations = filterPermutations(names, facts);
    const expected = [['Sarah', 'John', 'Jessie', 'Evan', 'Matt']];
    t.same(permutations, expected, 'found the 10x developer!');
    t.end();
};

test('finds the 10x developer using api', t => {
    const names = ['Jessie', 'Evan', 'John', 'Sarah', 'Matt'];
    const facts = [
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
    assert(names, facts, t);
});

test('finds the 10x developer using statements', t => {
    const statements = [
        'Jessie is not the best developer',
        'Evan is not the worst developer',
        'John is not the best developer or the worst developer',
        'Sarah is a better developer than Evan',
        'Matt is not directly below or above John as a developer',
        'John is not directly below or above Evan as a developer'
    ];
    const [names, facts] = parseStatements(statements);
    assert(names, facts, t);
});
