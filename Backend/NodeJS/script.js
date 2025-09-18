// run this code in git bash -> cd current directry -> node file.name

// Understanding Node REPL & Processes in Node
let n = 5;

// for (let i = 0; i < n; i++){
//     console.log("Hello World!",i);
// };

// console.log("Avinash Here!!");
// console.log("Byeee guyssss!!");

// console.log(process.argv);

let args = process.argv;

for(let i = 2; i < args.length; i++){
    console.log("Hello ", args[i]);
}


/* 
Hp@DESKTOP-JHNC4M8 MINGW64 ~/Desktop/web-dev/Backend/NodeJS (main)
$ node script.js
Hello World! 0
Hello World! 1
Hello World! 2
Hello World! 3
Hello World! 4
Avinash Here!!
Byeee guyssss!!

Hp@DESKTOP-JHNC4M8 MINGW64 ~/Desktop/web-dev/Backend/NodeJS (main)
$ node script.js
Hello World! 0
Hello World! 1
Hello World! 2
Hello World! 3
Hello World! 4
Avinash Here!!
Byeee guyssss!!
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Hp\\Desktop\\web-dev\\Backend\\NodeJS\\script.js'
]

Hp@DESKTOP-JHNC4M8 MINGW64 ~/Desktop/web-dev/Backend/NodeJS (main)
$ node script.js Avinash Sai Ashok Mahi
Hello  Avinash
Hello  Sai
Hello  Ashok
Hello  Mahi

Hp@DESKTOP-JHNC4M8 MINGW64 ~/Desktop/web-dev/Backend/NodeJS (main)
$ node script.js Avinash Alapati Sai Jalluri Ashok Bommanaboina Mahi Vardhan Yadagini
Hello  Avinash
Hello  Alapati
Hello  Sai
Hello  Jalluri
Hello  Ashok
Hello  Bommanaboina
Hello  Mahi
Hello  Vardhan
Hello  Yadagini

Hp@DESKTOP-JHNC4M8 MINGW64 ~/Desktop/web-dev/Backend/NodeJS (main)
$
*/

// ------------------------------------------------------------------


// Exporting Functions from another file


// require() - a built-in function to include external modules that exist in seperate files


// const Math = require("./math");

// console.log(Math.sum (2,3));
// console.log(Math.mul (2,3));
// console.log(Math.PI);


// ----------------------------------------------------

// Exporting data from another directory i.e Fruits

// const info = require('./Fruits');

// console.log(info);
// console.log(info[0]);

// -------------------------------------------------------------

// Using Import 

import { sum , Avi } from './math.js';

const result = sum(2,3);
console.log(result);

let name = Avi;
console.log(name)


// --------------------------------------------------------

import {generate} from "random-words";

console.log(generate());  