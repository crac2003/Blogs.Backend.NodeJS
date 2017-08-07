import * as express from "express";

import { endpointRegistryContext } from '../models/endpoint-context'

export abstract class endpoint{
    public abstract register(context:endpointRegistryContext);
}