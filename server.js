"use strict" 
const http = require("http");
const quotes = require("./quotes")
http.createServer((req, res) => {
const index = Math.floor(Math.random() *quotes.length);
const randomQuote = quotes[index];
    res.writeHead(200,{"Content-type": "text/plain"});
    res.write(randomQuote);
    res.end();   
}).listen(8888);
