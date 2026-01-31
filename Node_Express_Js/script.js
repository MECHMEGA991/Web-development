console.log("Hellow world");

var slugify = require('slugify')

let a =slugify('some Content')   // Some-string
console.log(a);

// If you prefer something other than '-' as seperator

let b=slugify('some&&&*^%$^string','_');
console.log(b)