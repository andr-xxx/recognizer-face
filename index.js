const checkUser = require('./src/checkUser');
const createNewUser = require('./src/createNewUser');

class Recognizer {
  checkUser(pathToImage, modelState) {
    return checkUser(pathToImage, modelState)
  }

  createNewUser(pathToFile, userName) {
    return createNewUser(pathToFile, userName)
  }
}

module.exports = new Recognizer();