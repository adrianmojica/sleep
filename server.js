const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser'); 
const port = process.env.PORT || 5000;

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json()); 

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.post('/calc', (req, res) => {
    let score = calculateSleep(req.body);
    res.send({ status: 'OK', sleepScore: score });
});


function calculateSleep(data){
    let bed = (getSleepValues(data.durationBed));
    let sleep =(getSleepValues(data.durationSleep));
    let score = (100*(sleep/bed));
    return score;
}


function getSleepValues(value){
    let valueClean = value.split("Hours")[0];
    let valueA = valueClean.split(":")[0];
    let valueB = valueClean.split(":")[1];
    if(valueB == 30) {
        valueB = .5;
    } else {
        valueB = 0;
    }
    let valueC = parseFloat(valueA)+parseFloat(valueB);
    return valueC;
}