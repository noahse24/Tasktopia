"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var path = require("path");
var TypeScriptExerciceApp = /** @class */ (function () {
    function TypeScriptExerciceApp() {
        this.webServer = (0, express_1.default)();
        this.webServer.set('views', path.join(__dirname, 'views'));
        this.webServer.set('view engine', 'hbs');
        this.webServer.use(body_parser_1.default.json());
        this.webServer.use(body_parser_1.default.urlencoded({ extended: false }));
    }
    TypeScriptExerciceApp.prototype.startWebServer = function (port) {
        this.webServer.listen(port, function () {
            console.log("Web-server listening for requests on port 8080");
        });
    };
    return TypeScriptExerciceApp;
}());
var app = new TypeScriptExerciceApp();
app.startWebServer(8080);
