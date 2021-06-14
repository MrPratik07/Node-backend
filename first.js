var unique = require('uniq');
var circle = require("./circle");

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

//console.log(unique(data));

document.querySelector("#para").innerHTML= unique(data);
document.querySelector("#area").innerHTML= circle.area(5);
