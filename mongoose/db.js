const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/mongo_movies', { useNewUrlParser: true,
    function (err) {
        if (err) {
            return console.error(err);
        } else {
            return console.log("connected :]")
        }
    }});

const { Schema } = mongoose;
/*
const actorSchema = new Schema({
    name: {
        type: String, required: true, min: 2
    },
    age: {
        type: Number, required: true, min: 2
    },
    knownfor: {
        type: String, required: false, min: 2
    },
});

const reviewSchema = new Schema({
    reviewer: {
        type: String, required: true, min: 2
    },
    rating: {
        type: Number, required: true, min: 1, max: 5
    },
});
*/
const movieSchema = new Schema({
    name: {
        type: String, required: true, min: 1
    },
    genre: {
        type: String, required: true, min: 1
    },
    runtime: {
        type: Number, required: true, min: 15, max: 300
    }, 
    actors: {
        //children: [ actorSchema ]
        type: String, required: true, min: 2
    },
    reviews: {
        //children: [ reviewSchema ]
        type: Number, required: true, min: 1, max: 5
    }
});

const Movie = mongoose.model('movie', movieSchema);

module.experts = Movie;
