import { expect } from 'chai';
import chaiHttp from 'chai-http';
import chai from 'chai';
import express = require("express");
import { app } from "../src/app";
import { getRepository, Repository } from 'typeorm';
import MovieEntity from '../src/entities/movie';

chai.use(chaiHttp);

const createFakeServer = async () => {
    return app().then(server => {
        const apiPort: number = 30001;
        server.listen(apiPort);
        return server
    });
}

describe('API', () => {
    describe('GET', () => {
        let fakeServer: express.Application;
        let movieRespository: Repository<MovieEntity>;

        before(async () => {
            fakeServer = await createFakeServer();
            movieRespository = getRepository(MovieEntity);
            console.log("BEFORE HOOK")
        })

        beforeEach(async () => {
            console.log("BEFORE EACH HOOK")
        })


        describe('/GET book', () => {
            it('it should GET all the books', (done) => {
                chai.request(fakeServer)
                    .post('/api/create')
                    .send({ title: "some test title here" })
                    .end(async (err, res) => {
                        expect(res).to.have.status(200);
                        console.log(res.body)
                        expect(res.body).to.have.property("payload");
                        expect(res.body).to.have.property("type");

                        const movie = res.body.payload.movie;
                        expect(movie).to.have.property("id").and.is.not.empty;

                        const found = await movieRespository.findOne(movie.id);
                        console.log(found)



                        done();
                    });
            });
        });


    })
});