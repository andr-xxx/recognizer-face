const fr = require('face-recognition');
const recognizer = fr.AsyncFaceRecognizer();

module.exports = function checkUser(pathToImage, modelState) {
  recognizer.load(modelState);
  const loadedImage = fr.loadImage(pathToImage);

  return recognizer.predictBest(loadedImage);
};