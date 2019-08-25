module.exports = {
    notBest: a => arr => arr[0] !== a,
    notWorst: a => arr => arr[arr.length - 1] !== a,
    betterThan: (a, b) => arr => arr.indexOf(a) < arr.indexOf(b),
    notDirectlyAbove: (a, b) => arr => arr[arr.indexOf(b) - 1] !== a,
    notDirectlyBelow: (a, b) => arr => arr[arr.indexOf(b) + 1] !== a
};
