const fr = require('face-recognition');
const recognizer = fr.AsyncFaceRecognizer();

module.exports = function checkUser(pathToImage) {
  loadOldUsers();
  const loadedImage = fr.loadImage(pathToImage);

  path.join(dataPath, fileName)
  return recognizer.predictBest(loadedImage);
};

function loadOldUsers() {
  const modelState = require('../model.json');
  recognizer.load(modelState);
}