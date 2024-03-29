const { notBest, notWorst, notWorseThan, notAdjacentTo } = require('./predicates');

module.exports = [
    [/^(.+) is not the best developer$/, notBest],
    [/^(.+) is not the worst developer$/, notWorst],
    [/^(.+) is not the best developer or the worst developer$/, notBest, notWorst],
    [/^(.+) is a better developer than (.+)$/, notWorseThan],
    [/^(.+) is not directly below or above (.+) as a developer$/, notAdjacentTo]
];
