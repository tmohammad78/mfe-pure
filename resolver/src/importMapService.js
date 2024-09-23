// src/importMapService.js
let importMap = {};

const getImportMap = () => importMap;

const updateImportMap = ({ name, url }) => {
  importMap[name] = url;
};

module.exports = {
  getImportMap,
  updateImportMap,
};
