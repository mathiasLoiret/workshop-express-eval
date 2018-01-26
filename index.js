let chalk = require('chalk');
const app = require('./src/app');
var fs = require('fs');

// port

const port = process.argv[2] || 3000

app.get('/bingo', function(req, res) {

   fs.readFile('src/numbers.txt', function(err, data) {

     numbers = (data.toString())
     array = numbers.split("\r\n");
     array.pop();
     resultat = array.join(", ");

     res.send(resultat)
    });


})
app.listen(port)

// start server here
console.log(chalk.green('Hello web server'));
