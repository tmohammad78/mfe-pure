// src/uploadController.js
const multer = require('multer');
const path = require('path');
const { getImportMap, updateImportMap } = require('./importMapService');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'assets'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const getImportMapHandler = (req, res) => {
  res.json(getImportMap());
};

const uploadFileHandler = (req, res) => {
  const { 'microfrontend-name': name } = req.body;
  const fileUrl = `http://localhost:3000/${req.file.originalname}`;
  updateImportMap({ name, url: fileUrl });
  res.sendStatus(200);
};

module.exports = {
  getImportMap: getImportMapHandler,
  uploadFile: [upload.single('file'), uploadFileHandler],
};
