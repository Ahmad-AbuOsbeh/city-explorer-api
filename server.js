'use strict';

const express = require('express');
const server1 = express();
const weatherData = require('./data/weather.json');
const cors=require('cors');
require('dotenv').config();

server1.use(cors());
// const PORT2 =3003;
const PORT2 =process.env.PORT2;

server1.listen(PORT2,()=>{
    console.log(`i am listening on port ${PORT2}`);
})

server1.get('/ahmad',(req,res)=>{
    let x= 'hellooo from sever, yes i recieved your request(from any where). this is my response'
    let requsetedCity=req.query.desired_city;
    let cityAllWheatherData= weatherData.find(item=>{
        if (requsetedCity.toLowerCase()==item.city_name.toLowerCase()) {
            return item;
        } 
    
    });
    let citySpecificData=cityAllWheatherData.data.map(item=>{
           return new Forecast(item);
    });
    res.send(citySpecificData);
})

class Forecast {

    constructor(newInstance){
        this.descreption = `low of ${newInstance.low_temp} , high of ${newInstance.max_temp} with ${newInstance.weather.description}`

        this.date= newInstance.valid_date;
    }
}

server1.get('*',(req,res)=>{
   
    res.status(404).send('invalid request to backend')
});
