const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { describe, it, beforeEach } = require("mocha");
const { expect } = require("chai");

const Movie = require("../db");
const server = require("../index");

describe('test this crud', () => {
    let testMovie;
    let id;

    beforeEach(async () => {
        try {
            await Movie.deleteMany({});
            testMovie = await Movie.createMovie({
                name: 'Wildfire',
                genre: 'Comedy',
                runtime: 156,
                actors: 'John Actor',
                reviews: 4
            });
            id = testMovie._id;
        } catch (err) {
            console.log(err);
        }
    });

    it('should create a movie', (done) => {
        const newMovie = {
            name: 'Split Shot',
            genre: 'Thriller',
            runtime: 160,
            actors: 'Arwin Van Buelser, Clarance Buford',
            reviews: 3
    };

        chai.request(server).post('/movies/createMovie').send(newMovie)
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res.status).to.equal(201);
            expect(res.body).to.include(newMovie);
            expect(res.body._id).to.not.be.null;
            return done();
        });
    });

    it('should get a movie', (done) => {
        chai.request(server).get('/movies/get/${testMovie._id}')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res.status).to.equal(200);
            expect(res.body).to.not.be.null;
            return done();
        })
    });

    it('should update a movie', (done) => {
        chai.request(server).patch('/movies/updateMovie/${testMovie._id}').query({name: "Wildfire"})
        .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body).to.include({
          _id: id.toString(),
          name: "Daybreak",
          genre: "Horror",
          runtime: 200,
          actors: "Jess Richards, Graham Wise",
          reviews: 4
        });

        return done();
        });
    });

    it('should delete a movie', (done) => {
        chai.request(server).delete('/movies/removeMovie/${testMovie._id')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res.status).to.equal(200);
            expect(res.body).to.be.null;
            return done();
        })
    })

});