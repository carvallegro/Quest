import express from 'express';
// var express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World ! Welcome to Quest backend :)'));

app.listen(3100, function () {
    console.log('Example app listening on port 3100!');
});
