"use strict";

let form = document.getElementById("form");
let input = document.getElementById("input");
let ducks = document.getElementById("ducks");
let data = {};
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
};

document.querySelector("body > section > form").addEventListener("submit", function(event) {
    event.preventDefault();

    const body = {
        id: event.target.id,
        age: event.target.age,
        name: event.target.name,
        habitat: event.target.habitat,
        gender: event.target.gender,
    };


    axios.post("http://localhost:8080/duck/create")
        .then(response => console.log(response))
        .catch(err => console.error(err));
})
