import * as express from "express";

import { authorization } from "./app/endpoints/authorization"

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
 
        var context = {
            url:'/',
            app:this.exp
        };

        new authorization().register(context);
        
        this.exp.get('/', function(req, res){
            res.json({
                message:'done'
            })
        });
    }

    start(port:number){
        this.exp.listen(port, function(){
            console.log(`Server started to listen on port ${port}`);
        });
    }
}

Server.initialize();
