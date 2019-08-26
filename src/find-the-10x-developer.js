const fs = require('fs');
const filterPermutations = require('./filter-permutations');
const parseStatements = require('./parse-statements');

const withPredicates = (names, predicates) => {
    const permutations = filterPermutations(names, predicates);
    if (permutations.length !== 1) return { found: false };
    const rankedDevelopers = permutations[0];
    const the10xDeveloper = rankedDevelopers[0];
    return { found: true, the10xDeveloper, rankedDevelopers };
};

const withStatements = statements => withPredicates(...parseStatements(statements));

const withFile = path => withStatements(fs.readFileSync(path, 'utf-8').split('\n'));

module.exports = { withPredicates, withStatements, withFile };
