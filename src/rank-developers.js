const fs = require('fs');
const filterPermutations = require('./filter-permutations');
const parseStatements = require('./parse-statements');

const getMatch = permutations => (permutations.length === 1 ? permutations[0] : []);
const withPredicates = (developers, predicates) => getMatch(filterPermutations(developers, predicates));
const withStatements = statements => withPredicates(...parseStatements(statements));
const withFile = path => withStatements(fs.readFileSync(path, 'utf-8').split('\n'));

module.exports = { withPredicates, withStatements, withFile };
