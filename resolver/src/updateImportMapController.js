// src/updateImportMapController.js
const { updateImportMap } = require('./importMapService');

const updateImportMapHandler = (req, res) => {
  const { 'dependency-name': name, 'dependency-version': version } = req.body;
  const url = `https://esm.sh/${name}@${version}`;
  updateImportMap({ name, url });
  res.sendStatus(200);
};

module.exports = {
  updateImportMap: updateImportMapHandler,
};
