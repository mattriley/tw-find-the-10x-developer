const test = require('tape');
const rankDevelopers = require('../src/rank-developers');
const { notBest, notWorst, betterThan, notAdjacent } = require('../src/predicates');

const expectedRanking = ['Sarah', 'John', 'Jessie', 'Evan', 'Matt'];

test('ranks developer with predicates', t => {
    const developers = ['Jessie', 'Evan', 'John', 'Sarah', 'Matt'];
    const facts = [
        notBest('Jessie'),
        notWorst('Evan'),
        notBest('John'),
        notWorst('John'),
        betterThan('Sarah', 'Evan'),
        notAdjacent('Matt', 'John'),
        notAdjacent('John', 'Evan')
    ];
    const rankedDevelopers = rankDevelopers.withPredicates(developers, facts);
    t.same(rankedDevelopers, expectedRanking, 'Developers correctly ranked');
    t.end();
});

test('ranks developers with statements', t => {
    const statements = [
        'Jessie is not the best developer',
        'Evan is not the worst developer',
        'John is not the best developer or the worst developer',
        'Sarah is a better developer than Evan',
        'Matt is not directly below or above John as a developer',
        'John is not directly below or above Evan as a developer'
    ];
    const rankedDevelopers = rankDevelopers.withStatements(statements);
    t.same(rankedDevelopers, expectedRanking, 'Developers correctly ranked');
    t.end();
});

test('ranks developers with file', t => {
    const rankedDevelopers = rankDevelopers.withFile('factfile');
    t.same(rankedDevelopers, expectedRanking, 'Developers correctly ranked');
    t.end();
});
