const axios = require('axios');

let inMemory={};

class Forecast {

    constructor(newInstance){
        // this.descreption = `temp = ${newInstance.low_temp} C , wind speed = ${newInstance.max_temp} with ${newInstance.weather.description}`

        // this.date= newInstance.valid_date;
        this.descreption = `temp = ${newInstance.temp} C , wind speed = ${newInstance.wind_spd} with ${newInstance.weather.description}`

        this.date= newInstance.datetime;
    }
}
const WEATHER_API_KEY=process.env.WEATHER_API_KEY;


function  gettingWeather(request,response) {
    let x= 'hellooo from sever, yes i recieved your request(from any where). this is my response'
    let requsetedCity=request.query.desired_city;
    let weathUrlReq=`http://api.weatherbit.io/v2.0/current?city=${requsetedCity}&key=${WEATHER_API_KEY}`
    // let wheatherApiResult= 
   if (inMemory[requsetedCity] !== undefined) {
       response.send(inMemory[requsetedCity]);
       console.log('helloooo from cach memory,weather');
   } else {
       
       axios
       .get(weathUrlReq)
       .then(results=>{
           let r=results.data.data[0];
        //    console.log('resul.data.data',r);
           let finalData=new Forecast(r);
           response.status(200).send(finalData);
           inMemory[requsetedCity]=finalData;
           console.log('helloooo from 3rd party weather API');
       })
       .catch(err=>{
           response.status(500).send(`error in getting data ==> ${err}`)
       })
   }
   
}

module.exports = gettingWeather;