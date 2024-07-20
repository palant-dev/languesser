var franc = require('./node_modules/franc');
var langs = require('./node_modules/langs');

const argv = process.argv.slice(2);
const stringArgv = argv.join(" ");


const codeDetLang = franc(stringArgv);
console.log(`Language code detected:`, codeDetLang);

const nameDetLang = langs.where("2", codeDetLang);

console.log('The language is:', nameDetLang.name);
