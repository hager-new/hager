const express = require('express');
const axios = require('axios').default;
const movies = express.Router();
movies.get('/movies', (req, res) =>{
    
    var options = {
      method: 'GET',
      url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
      headers: {
        'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
        'x-rapidapi-key': '18cda9c606mshc247e1335c3b2b5p1a5efbjsn0f2bb8c8a88b'
      }
    };
    axios.request(options).then(function (response) {
        console.log(response.data);
        res.render('movies', {title: 'movies list', jokes: response.data});
    }).catch(function (error) {
        console.error(error);
    });
})
    module.exports=movies; 