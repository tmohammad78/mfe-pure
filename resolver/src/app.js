// src/app.js
const express = require('express');
const path = require('path');
const uploadController = require('./uploadController');
const updateImportMapController = require('./updateImportMapController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'assets')));

app.get('/', uploadController.getImportMap);
app.post('/uploadAsset', uploadController.uploadFile);
app.post('/updateImportMap', updateImportMapController.updateImportMap);

module.exports = app;
