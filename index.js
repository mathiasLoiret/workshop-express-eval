let chalk = require('chalk');
const app = require('./src/app');
var fs = require('fs');

// port

const port = process.argv[2] || 3000

app.get('/bingo', function(req, res) {

  num = req.query.mynumbers
  win = false
  fs.readFile('src/numbers.txt', function(err, data) {

    numbers = (data.toString())
    array = numbers.split("\r\n");
    array.pop();
    arrayNum = num.split(",");
    
    if (array == arrayNum){
      win = true
    }

    resultat = array.join(", ");

    if (num == null){
      res.send('The bingo game is already started and known numbers are ' +resultat)
    }else{

      if (win){
        res.send('Bingo')
      }else {
        res.send("The bingo game is already started, sorry your numbers doesn't match with known numbers " + resultat + " ; so you can not say Bingo")
      }

    }

  });
})

app.listen(port)










// start server here
console.log(chalk.green('Hello web server'));
