import * as express from "express";

import { endpoint } from './endpoint-base';
import { endpointRegistryContext } from '../models/endpoint-context';


export class authorization extends endpoint{
    public register(context: endpointRegistryContext) {
        context.app.get('/oauth2/authorize', this.onAuthorizationRequest)
        context.app.get('/oauth2/token', this.onTokenRequest)
        context.app.get('/oauth2/revoke', this.onRevokeRequest)
    }

    private onTokenRequest(req: any, res: any): any {
        return res.json({
            'message':'onTokenRequest'
        });
    }

    private onRevokeRequest(req: any, res: any): any {
        return res.json({
            'message':'onRevokeRequest'
        });
    }

    private onAuthorizationRequest(req: any, res: any): any {
        return res.json({
            'message':'authorized'
        });
    }
}