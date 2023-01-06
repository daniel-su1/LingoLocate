const franc = require("franc");
const langs = require("langs");
const colors = require("colors");
const input = process.argv[2];
const langCode = franc(input);
const language = langs.where("3", langCode);

if(langCode === 'und'){
    console.log("Could not determine language. Please try again with more text.".red)
}
else{
    try{
        console.log(`The language is: ${language.name}`.green);
    }
    catch(e){
        console.log(`The language is: English`.green);
    }

}
