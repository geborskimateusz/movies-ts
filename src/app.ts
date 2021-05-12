import { createContainer } from "./container";
import { AwilixContainer } from "awilix";
import express = require("express");

export const app = async (): Promise<express.Application> => {

    const container: AwilixContainer = await createContainer();

    const server = container.cradle.expressServer as express.Application;
     
    return server;
}