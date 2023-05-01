#!/usr/bin/node
const request = require('request');
<<<<<<< HEAD
const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}/`;
let characters = [];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
=======
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];
request(url, function (error, response, body) {
  if (!error) {
    let characters = JSON.parse(body).characters;
    printCharacters(characters, 0);
>>>>>>> 6d7ee8be5c2d5d4151f6ff14ffe61c6e5fa2c061
  }

  const data = JSON.parse(body);
  characters = data.characters;
  getCharacters(0);
});

const getCharacters = (index) => {
  if (index === characters.length) {
    return;
  }

  request(characters[index], (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const characterData = JSON.parse(body);
    console.log(characterData.name);
    getCharacters(index + 1);
  });
};
