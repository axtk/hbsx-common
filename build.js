const fs = require('fs');
const {EOL} = require('os');
const TAB = ' '.repeat(4);

let content = fs
	.readdirSync('./src')
	.reduce((s, f) => s + `${EOL}${TAB}${f.replace(/\.js$/, '')}: require('./src/${f}'),`, '');

fs.writeFileSync('./index.js', `module.exports = {${content}${EOL}};`);