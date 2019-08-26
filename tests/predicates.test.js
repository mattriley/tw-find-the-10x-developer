const test = require('tape');
const predicates = require('../src/predicates');
const { notBest, notWorst, notWorseThan, notAdjacentTo } = predicates;

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

test('better than', t => {
    const arr = ['foo', 'bar', 'baz'];
    t.true(notWorseThan('foo', 'bar')(arr), 'foo is better than bar');
    t.true(notWorseThan('foo', 'baz')(arr), 'foo is better than baz');
    t.false(notWorseThan('bar', 'foo')(arr), 'bar is worse than foo');
    t.end();
});

test('not directly above', t => {
    const arr = ['foo', 'bar', 'baz'];
    t.true(notAdjacentTo('foo', 'baz')(arr), 'foo is not directly above baz');
    t.false(notAdjacentTo('foo', 'bar')(arr), 'foo is directly above bar');
    t.end();
});

test('not directly below', t => {
    const arr = ['foo', 'bar', 'baz'];
    t.true(notAdjacentTo('baz', 'foo')(arr), 'baz is not directly below foo');
    t.false(notAdjacentTo('bar', 'foo')(arr), 'bar is directly below foo');
    t.end();
});
