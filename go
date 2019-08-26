#!/usr/bin/env node

const rankDevelopers = require('./src/rank-developers');
const rankedDevelopers = rankDevelopers.withFile('factfile');

if (rankedDevelopers.length) {
    console.log(`The mythical 10x developer is: ${rankedDevelopers[0]}.`);
    console.log(`Developers ranked from best to worst: ${rankedDevelopers.join(', ')}.`);
} else {
    console.log(`The mythical 10x developer was not found! Check your facts and try again.`);
}
