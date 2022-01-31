const request = require("request")

const forecast= (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=ca3992e49b4e9a0852c8b2a6f43dea6b&query='+latitude+','+longitude+'&units=f'

    request({ url, json: true }, (error, {body}) => {
            if (error) {
                callback('Unable to connect to weather service!',undefined)
            } else if (body.error) {
                callback('Unable to find location',undefined)
            } else {
                callback(undefined,body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out.")
            }
        })
}
module.exports=forecast