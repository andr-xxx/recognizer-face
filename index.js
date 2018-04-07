const checkUser = require('./src/checkUser');
const createNewUser = require('./src/createNewUser');

class Recognizer {
  checkUser(pathToImage) {
    checkUser(pathToImage)
  }

  createNewUser(pathToFile, userName) {
    createNewUser(pathToFile, userName)
  }
}

module.exports = new Recognizer;