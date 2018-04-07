const Recognizer = require('./index');

const recognizer = new Recognizer();
recognizer.createNewUser('./andr-klop', 'andr')
  .then(result => {
    console.log(result)
  });
recognizer.createNewUser('./olge-klop', 'oleg')
  .then(result => {
    console.log(result)
  });

recognizer.checkUser('./newTest/andr11-min.jpg')
  .then(bestPredict => {
    console.log(bestPredict)
  });