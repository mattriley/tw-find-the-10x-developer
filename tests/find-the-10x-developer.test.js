const test = require('tape');
const findThe10xDeveloper = require('../src/find-the-10x-developer');
const { notBest, notWorst, betterThan, notDirectlyAbove, notDirectlyBelow } = require('../src/predicates');

test('finds the 10x developer with predicates', t => {
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
    const { found, the10xDeveloper, rankedDevelopers } = findThe10xDeveloper.withPredicates(names, facts);
    t.true(found, 'a result was found');
    t.equal(the10xDeveloper, rankedDevelopers[0], '10x developer was identified');
    t.end();
});

test('finds the 10x developer with statements', t => {
    const statements = [
        'Jessie is not the best developer',
        'Evan is not the worst developer',
        'John is not the best developer or the worst developer',
        'Sarah is a better developer than Evan',
        'Matt is not directly below or above John as a developer',
        'John is not directly below or above Evan as a developer'
    ];
    const { found, the10xDeveloper, rankedDevelopers } = findThe10xDeveloper.withStatements(statements);
    t.true(found, 'a result was found');
    t.equal(the10xDeveloper, rankedDevelopers[0], '10x developer was identified');
    t.end();
});
