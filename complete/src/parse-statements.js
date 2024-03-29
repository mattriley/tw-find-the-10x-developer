const statementPredicates = require('./statement-predicates');
const uniq = names => Array.from(new Set(names));

const parseStatement = statement => {
    const [pattern, ...predicateFuncs] = statementPredicates.find(([pattern]) => pattern.test(statement));
    const names = statement.match(pattern).slice(1);
    const predicates = predicateFuncs.map(predicate => predicate(...names));
    return { names, predicates };
};

module.exports = statements => {
    const parsedStatements = statements.map(parseStatement);
    const names = uniq(parsedStatements.flatMap(({ names }) => names));
    const predicates = parsedStatements.flatMap(({ predicates }) => predicates);
    return [names, predicates];
};
