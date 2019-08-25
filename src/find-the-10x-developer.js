const filterPermutations = require('./filter-permutations');
const parseStatements = require('./parse-statements');

const withPredicates = (names, predicates) => {
    const permutations = filterPermutations(names, predicates);
    if (permutations.length != 1) return { found: false };
    const [rankedDevelopers] = permutations;
    const [the10xDeveloper] = rankedDevelopers;
    return { found: true, the10xDeveloper, rankedDevelopers };
};

const withStatements = statements => withPredicates(...parseStatements(statements));

module.exports = { withPredicates, withStatements };
