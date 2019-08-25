const test = require('tape');
const predicates = require('../src/predicates');
const { notBest } = predicates;

test('not the best', t => {
    const items = ['foo', 'bar'];
    t.true(notBest('bar')(items), 'bar is not the best');
    t.false(notBest('foo')(items), 'foo is the best');
    t.end();
});
