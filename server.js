'use strict';

const express = require('express');
const server1 = express();
// const weatherData = require('./data/weather.json');
const cors=require('cors');
require('dotenv').config();
const axios = require('axios');

server1.use(cors());
// const PORT2 =3003;
const PORT2 =process.env.PORT;

server1.listen(PORT2,()=>{
    console.log(`i am listening on port ${PORT2}`);
})

const weather = require('./weather.js');
const movies = require('./movies.js');

server1.get('/ahmad',weather)
server1.get('/movies',movies)



// =>{
    // let x= 'hellooo from sever, yes i recieved your request(from any where). this is my response'
    // let requsetedCity=req.query.desired_city;
    // let weathUrlReq=`http://api.weatherbit.io/v2.0/current?city=amman&key=6f0c8f51aa1b4209874f1fc926c23aaf`
    // let wheatherApiResult= await axios.get(weathUrlReq);
    // let finalData=new Forecast(wheatherApiResult.data.data)
    // let cityAllWheatherData= weatherData.find(item=>{
    //     if (requsetedCity.toLowerCase()==item.city_name.toLowerCase()) {
    //         return item;
    //     } 
    
    // });
    // let citySpecificData=cityAllWheatherData.data.map(item=>{
    //        return new Forecast(item);
    // });
    // res.send(x);
// })



//second request : for movies
// https://api.themoviedb.org/3/search/movie?api_key=a774e112885b40790b2a79a1cd7e8d02&query=amman



// class Movie{
//     constructor(newInstance){
//         this.name =
//         this.imgUrl =
//         this.overView = 
//     }
// }
server1.get('*',(req,res)=>{
   
    res.status(404).send('invalid request to backend')
});
