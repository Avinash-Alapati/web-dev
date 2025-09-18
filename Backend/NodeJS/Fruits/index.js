// we have to export the data in this directory to script.js in Node JS directory

// SO we created this file

const apple = require('./apple');
const banana = require('./banana');
const orange = require('./orange');

let fruitsArr = [apple , banana , orange];

module.exports = fruitsArr;