/*
function jj(abc){
  if(Number.isInteger( abc )){
    console.log('ok!');
  } else {
    console.log('NG!');
  }
};

jj(true);
*/

const express = require('express');
const app = express();

app.listen(3000, function () {
  console.log('app is running at port 3000.');
});

app.get('/', function (req, res){
  res.send('<h1>Hello, My Server!</h1>');
});

app.get('/getData/', function (req, res){
  let number = Number(req.query.number);
  console.log(number);
  console.log(Number.isInteger(number));
  let sum = 0;
  if ( number == '') {
    res.send('<h1>Lack of Parameter!</h1>');
  } else if ( Number.isInteger(number) && number >= 0) {
    for( i = 0; i <= number; i += 1 ){
      sum += i;
    }
    res.send(sum);
  } else {
    res.send('<h1>Wrong Parameter!</h1>');
  }
});
