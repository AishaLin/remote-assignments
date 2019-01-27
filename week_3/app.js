/* ===================================
  Assignment 1
=================================== */
const express = require('express');
const app = express();
app.listen(3000, function () {
  console.log('app is running at port 3000.');
});

app.get('/', function (req, res){
  res.send('<h1>Hello, My Server!</h1>');
});

/* ===================================
  Assignment 2
=================================== */
app.get('/getData', function (req, res){
  let number = req.query.number;
  let beNumber = Number(number);
  let sum = 0;
  if ( number === undefined || number ==='' ) {
    res.send('<h1>Lack of Parameter!</h1>');
  } else if ( Number.isInteger(beNumber) && beNumber > 0) {
    for(let i = 0; i <= beNumber; i += 1 ){
      sum += i;
    }
    res.send(sum.toString());
  } else {
    res.send('<h1>Wrong Parameter!</h1>');
  }
});

/* ===================================
  Assignment 3
=================================== */
app.use(express.static('./public'));

/* ===================================
  Assignment 4 .....QQ
=================================== */
