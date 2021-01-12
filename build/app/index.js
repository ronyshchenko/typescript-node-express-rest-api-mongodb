"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var connect_1 = require("./connect");
var app = express();
var port = 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    return res.send('Welcome!');
});
app.listen(port, function () {
    return console.log("Application was started on port " + port + ".");
});
var db = 'mongodb+srv://ronyshchenko:morimorovich@cluster0.gmarx.mongodb.net/test3';
connect_1.connect({ db: db });
