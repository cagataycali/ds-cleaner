#!/usr/bin/env node
var E = require('3x3c');
var colors = require('colors');
var emoji = require('node-emoji');

E(`find . -name '*.DS_Store' -type f -delete`)
  .then((value) => {console.log(emoji.emojify(':zap:'), colors.green('DS_Store\'s cleaned.'));})
  .catch((err) => {console.log(colors.red('Error:', err));})
