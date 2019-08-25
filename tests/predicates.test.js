const test = require('tape');
const predicates = require('../src/predicates');
const { notBest, notWorst } = predicates;

test('not the best', t => {
    const arr = ['foo', 'bar'];
    t.true(notBest('bar')(arr), 'bar is not the best');
    t.false(notBest('foo')(arr), 'foo is the best');
    t.end();
});

test('not the worst', t => {
    const arr = ['foo', 'bar'];
    t.true(notWorst('foo')(arr), 'foo is not the worst');
    t.false(notWorst('bar')(arr), 'bar is the worst');
    t.end();
});
