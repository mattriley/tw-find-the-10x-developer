const test = require('tape');
const everyPermutation = require('../src/every-permutation');

test('generates every permutation', t => {
    const arr = ['foo', 'bar', 'baz'];
    const permutations = everyPermutation(arr);
    const expected = [
        ['foo', 'bar', 'baz'],
        ['foo', 'baz', 'bar'],
        ['bar', 'foo', 'baz'],
        ['bar', 'baz', 'foo'],
        ['baz', 'foo', 'bar'],
        ['baz', 'bar', 'foo']
    ];
    t.same(permutations, expected, 'every permutation generated');
    t.end();
});
