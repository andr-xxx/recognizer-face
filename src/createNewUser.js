const path = require('path');
const fs = require('fs');
const fr = require('face-recognition');
const recognizer = fr.AsyncFaceRecognizer();

module.exports = function createNewUser(pathToFile, userName) {
  const dataPath = path.resolve(pathToFile);
  const allFiles = fs.readdirSync(dataPath);

  const imagesByClass = allFiles
    .map(fileName => path.join(dataPath, fileName))
    .map(filePath => fr.loadImage(filePath));

  return new Promise((full, reject) => {
    recognizer.addFaces(imagesByClass, userName)
      .then(() => {
        full(recognizer.serialize().find((user) => user.className === userName))
      })
      .catch(err => {
        reject(err)
      });
  });
};