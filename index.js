const http = require('http');

// colors package :-
const colors = require('colors');

console.log("Hello Everyone..........!".rainbow);
//--------------------------------Basic Server---------------------------------
// method 1 :- Dhulo Dhulesh
// http.createServer((req,res) => {
//     res.write("Hello Students......!");c
//     res.end();
// }).listen(4500);

// method 2 :-
// function dataControl (req,res)
// {
//     res.write("<h1>Hello Students, Welcome to simba Institute......!</h1>");
//     res.end();
// }

// http.createServer(dataControl).listen(4500);

// Arrow function:-
const dataControl = (req,res) => {
    res.write("<h1>Hello Students, Welcome to Simba Institute......!</h1>");
    res.end();
}

http.createServer(dataControl).listen(4600);