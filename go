#!/usr/bin/env node

const findThe10xDeveloper = require('./src/find-the-10x-developer');
const { found, the10xDeveloper, rankedDevelopers } = findThe10xDeveloper.withFile('factfile');

if (found) {
    console.log(`The mythical 10x developer is: ${the10xDeveloper}.`);
    console.log(`Developers ranked from best to worst: ${rankedDevelopers.join(', ')}.`);
} else {
    console.log(`The mythical 10x developer was not found! Check your facts and try again.`);
}
