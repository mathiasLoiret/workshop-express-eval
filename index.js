let chalk = require('chalk');
const app = require('./src/app');

// port

const port = process.argv[2] || 3000

app.get('/bingo', function(req, res) {
  res.send('Bingo')
})
app.listen(port)

// start server here
console.log(chalk.green('Hello web server'));
