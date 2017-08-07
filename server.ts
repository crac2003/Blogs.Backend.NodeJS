import * as express from "express";

//TODO:read from file 
var config = {
    port: 3300
}

class Server {
    private static server:Server;
    private exp:any;


    static initialize(){
        Server.server = new Server();

        //TODO: read config file
        Server.server.bootstrap();

        Server.server.start(config.port);
    }

    bootstrap(){
        this.exp = new express();
    }

    start(port:number){
        this.exp.listen(port, function(){
            console.log(`Server started to listen on port ${port}`);
        });
    }
}

Server.initialize();
