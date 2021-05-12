import { expect } from 'chai';
import chaiHttp from 'chai-http';
import chai from 'chai';
import express = require("express");
import { app } from "../src/app";

chai.use(chaiHttp);

const createFakeServer = async () => {
    //     const application = app();
    //     await application. 
    
    
    //     return app
    
    return app().then(server => {
        const apiPort: number = 30001;
        server.listen(apiPort);
        return server
    });
}

describe('API', () => {
    describe('GET', () => {
        let fakeServer: express.Application;

        beforeEach(async () => {
            fakeServer = await createFakeServer();
        })


        describe('/GET book', () => {
            it('it should GET all the books', (done) => {
                chai.request(fakeServer)
                    .get('/api/findById')
                    .end((err, res) => {
                        expect(res).to.have.status(200);

                        const expected = JSON.stringify({ msg: 'Found user witha id 1234' });
                        const body = JSON.stringify(res.body);
                        expect(body).to.equal(expected)

                        done();
                    });
            });
        });


    })
});