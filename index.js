const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;

let numberOfRequest = 0;

// function middleware1(req, res, next) {
//   numberOfRequest = numberOfRequest + 1;
//   console.log(numberOfRequest);
//   console.log("from inside middleware " + req.headers.counter);
//   next(); // if tis in not called the request will be prnding it will not carry on forward
//}

// app.use(middleware1); //registering a middle awre it means every request first goes into it

app.use(bodyParser.json()); // using some middleware library as bodyParsar

function sum(counter) {
  var sum = 0;
  for (var i = 0; i <= counter; i++) {
    sum = sum + i;
  }
  return sum;
}
function mul(counter) {
  var mul = 1;
  for (var i = 1; i <= counter; i++) {
    mul = mul * i;
  }
  return mul;
}

function handleFristRequest(req, res) {
  var counter = req.query.counter; // counter : getting input form the end user

  var calculatedSum = sum(counter);
  var calculatedMul = mul(counter);

  var answerObject = {
    sum: calculatedSum,
    mul: calculatedMul,
  };

  res.send(answerObject);

  //res.status(201).send(answer); // this is what the end user gets
}

function givePage(req, res) {
  res.sendFile(__dirname + "./index.html");
}

app.get("/" /* the routes  */, givePage);

app.get("/handleSum" /* the routes */, handleFristRequest); //get handler
// app.post("/createUser" /* the routes */, createUser); // post handler
// when this is called handleFirstRequest will called

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started); // keep listening the requests indefnitely

// Express does not support the body, so we need to import it.
// app.use tells the code to use this middlewares
