var franc = require('./node_modules/franc');
var langs = require('./node_modules/langs');
var colors = require('./node_modules/colors')

const argv = process.argv.slice(2);
const stringArgv = argv.join(" ");
const codeDetLang = franc(stringArgv);

if (codeDetLang !== "und") {
    console.log(colors.blue(`Language code detected:`, codeDetLang));

    const nameDetLang = langs.where("2", codeDetLang);

    console.log(colors.blue('The language is:', nameDetLang.name));
} else {
    console.log(colors.red('Impossible to detect the language, try with a simpler sentence.'));
}


