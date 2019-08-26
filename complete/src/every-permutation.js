const perm = arr =>
    arr[0] ? arr.reduce((acc, n) => (perm(arr.filter(m => m != n)).forEach(y => acc.push([n, ...y])), acc), []) : [[]];
module.exports = perm;
