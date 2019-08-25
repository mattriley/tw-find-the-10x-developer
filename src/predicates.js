module.exports = {
    notBest: a => arr => arr[0] !== a,
    notWorst: a => arr => arr[arr.length - 1] !== a,
    betterThan: (a, b) => arr => arr.indexOf(a) < arr.indexOf(b)
};
