#!/usr/bin/env node

const yargs = require('yargs');

const weeknumber = require('./src/weeknumber');

yargs(process.argv.slice(2))
  .usage('Usage: npx @mrako/presentation-github-actions [options]')
  .example('npx @mrako/presentation-github-actions', 'show the current week number')
  .help('h')
  .alias('h', 'help')
  .alias('v', 'version')
  .argv;

console.log(`This week is number ${weeknumber.getNumberOfWeek()}.`);
