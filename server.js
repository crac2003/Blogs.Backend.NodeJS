"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var config = {
    port: 3300
};
class Server {
    static initialize() {
        Server.server = new Server();
        //TODO: read config file
        Server.server.bootstrap();
        Server.server.start(config.port);
    }
    bootstrap() {
        this.exp = new express();
    }
    start(port) {
        this.exp.listen(port, function () {
            console.log(`Server started to listen on port ${port}`);
        });
    }
}
Server.initialize();
