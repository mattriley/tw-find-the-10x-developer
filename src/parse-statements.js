const statementPredicates = require('./statement-predicates');
const uniq = names => Array.from(new Set(names));

module.exports = statements => {
    const parsedStatements = statements.map(parseStatement);
    const names = uniq(parsedStatements.flatMap(({ names }) => names));
    const predicates = parsedStatements.flatMap(({ predicates }) => predicates);
    return [names, predicates];
};

const parseStatement = statement => {
    const { getNames, getPredicates } = findStatement(statement);
    const names = getNames();
    const predicates = getPredicates(names);
    return { names, predicates };
};

const findStatement = statement => {
    const [pattern, ...predicates] = statementPredicates.find(([pattern]) => pattern.test(statement));
    const getNames = () => Array.from(statement.match(pattern)).slice(1);
    const getPredicates = names => predicates.map(predicate => predicate(...names));
    return { getNames, getPredicates };
};
