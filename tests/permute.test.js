const test = require('tape');
const permute = require('../src/permute');

test('generates all possible permutations', t => {
    const arr = ['foo', 'bar', 'baz'];
    const permutations = permute(arr);
    const expected = [
        ['foo', 'bar', 'baz'],
        ['foo', 'baz', 'bar'],
        ['bar', 'foo', 'baz'],
        ['bar', 'baz', 'foo'],
        ['baz', 'foo', 'bar'],
        ['baz', 'bar', 'foo']
    ];
    t.same(permutations, expected, 'generated expected permutations');
    t.end();
});
